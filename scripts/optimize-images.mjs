/**
 * Convert public PNG rasters to resized WebP.
 * Run: npm run optimize:images
 *
 * Future drops: put PNG/JPG next to the intended folder, then re-run.
 * Keep SVG icons as SVG. Product videos stay MP4/WebM (see docs/handbook.md).
 */
import { readdir, stat, unlink, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const imagesDir = path.join(rootDir, 'public', 'images')
const deletePng = process.env.KEEP_PNG !== '1'

function maxWidthFor(relPosix) {
  if (/\/DTS\.png$/i.test(relPosix)) return 320
  if (/\/Products\/.+-logo\.png$/i.test(relPosix)) return 640
  if (/\/partners\//i.test(relPosix)) return 900
  if (/\/clients\//i.test(relPosix)) return 480
  if (/\/services\//i.test(relPosix)) return 640
  return 1200
}

async function walkPng(dir, acc = []) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      await walkPng(full, acc)
    } else if (/\.png$/i.test(entry.name)) {
      acc.push(full)
    }
  }
  return acc
}

function formatKb(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`
}

async function convertPng(file) {
  const rel = path.relative(imagesDir, file).split(path.sep).join('/')
  const maxWidth = maxWidthFor(`/${rel}`)
  const outFile = file.replace(/\.png$/i, '.webp')
  const input = sharp(file)
  const meta = await input.metadata()
  const width = meta.width || maxWidth
  const pipeline = width > maxWidth ? input.resize({ width: maxWidth, withoutEnlargement: true }) : input

  await pipeline
    .webp({ quality: 80, alphaQuality: 90, effort: 6 })
    .toFile(outFile)

  const before = (await stat(file)).size
  const after = (await stat(outFile)).size
  if (deletePng) await unlink(file)
  return { rel, before, after }
}

function pngIco(images) {
  const count = images.length
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0)
  header.writeUInt16LE(1, 2)
  header.writeUInt16LE(count, 4)
  const entries = Buffer.alloc(16 * count)
  let offset = 6 + 16 * count
  const parts = [header, entries]
  for (let i = 0; i < count; i += 1) {
    const img = images[i]
    const e = i * 16
    const dim = img.size >= 256 ? 0 : img.size
    entries.writeUInt8(dim, e)
    entries.writeUInt8(dim, e + 1)
    entries.writeUInt16LE(1, e + 4)
    entries.writeUInt16LE(32, e + 6)
    entries.writeUInt32LE(img.png.length, e + 8)
    entries.writeUInt32LE(offset, e + 12)
    offset += img.png.length
    parts.push(img.png)
  }
  return Buffer.concat(parts)
}

async function squareMark(source, size, navy) {
  const trimmed = await sharp(source).trim({ background: '#000000', threshold: 18 }).png().toBuffer()
  const inner = Math.max(1, Math.round(size * 0.9))
  const logo = await sharp(trimmed)
    .resize(inner, inner, { fit: 'contain', background: navy })
    .png()
    .toBuffer()
  return sharp({
    create: { width: size, height: size, channels: 4, background: navy }
  })
    .composite([{ input: logo, gravity: 'centre' }])
    .png({ compressionLevel: 9 })
    .toBuffer()
}

async function writeFavicon() {
  const sources = ['DTS.webp', 'DTS.png'].map((name) => path.join(imagesDir, name))
  let source = null
  for (const candidate of sources) {
    try {
      await stat(candidate)
      source = candidate
      break
    } catch {
      /* try next */
    }
  }
  if (!source) return null

  const navy = { r: 11, g: 42, b: 74, alpha: 1 }
  const sizes = [
    [48, path.join(rootDir, 'public', 'favicon.png')],
    [192, path.join(rootDir, 'public', 'icon-192.png')],
    [512, path.join(rootDir, 'public', 'icon-512.png')]
  ]
  const pngs = []
  for (const [size, out] of sizes) {
    const png = await squareMark(source, size, navy)
    await writeFile(out, png)
    pngs.push({ size, png })
  }
  const apple = path.join(imagesDir, 'apple-touch.png')
  await writeFile(apple, await squareMark(source, 180, navy))
  const icoSizes = [16, 32, 48]
  const icoImages = []
  for (const size of icoSizes) {
    icoImages.push({ size, png: await squareMark(source, size, navy) })
  }
  await writeFile(path.join(rootDir, 'public', 'favicon.ico'), pngIco(icoImages))
  return { favicon: sizes[0][1], apple, pngs }
}

if (process.argv.includes('--favicon-only')) {
  const written = await writeFavicon()
  console.log(written ? 'favicon set written' : 'favicon source missing')
  process.exit(written ? 0 : 1)
}

const files = await walkPng(imagesDir)
const rows = []
for (const file of files) {
  rows.push(await convertPng(file))
}

await writeFavicon()

const beforeTotal = rows.reduce((sum, row) => sum + row.before, 0)
const afterTotal = rows.reduce((sum, row) => sum + row.after, 0)

const report = [
  '# Image optimization report',
  '',
  '| File | Before | After |',
  '|------|--------|-------|',
  ...rows.map((row) => `| ${row.rel} | ${formatKb(row.before)} | ${formatKb(row.after)} |`),
  '',
  `Total: ${formatKb(beforeTotal)} → ${formatKb(afterTotal)}`,
  ''
].join('\n')

await writeFile(path.join(rootDir, 'scripts', 'image-optimize-report.md'), report)
console.log(report)
