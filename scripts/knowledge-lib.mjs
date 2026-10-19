import { readFileSync, readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import MarkdownIt from 'markdown-it'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const contentRoot = join(root, 'content', 'knowledge')
const md = new MarkdownIt({ html: false, linkify: true })

const ARTICLE_ORDER = [
  'what-is-e-signature',
  'signature-characteristics',
  'signature-services',
  'signature-applications',
  'e-seal-steps',
  'e-seal-vs-signature',
  'signature-faq',
  'usb-token',
  'request-signature',
  'what-is-ess',
  'what-is-e-invoice',
  'what-is-e-receipt',
  'invoice-vs-receipt',
  'e-receipt-steps',
  'e-receipt-faq',
  'contact-hours'
]

function topicFromSlug(slug) {
  if (slug === 'usb-token') return 'token'
  if (slug === 'what-is-ess') return 'ess'
  if (slug === 'contact-hours') return 'contact'
  if (
    slug === 'what-is-e-receipt' ||
    slug === 'invoice-vs-receipt' ||
    slug === 'e-receipt-steps' ||
    slug === 'what-is-e-invoice' ||
    slug === 'e-receipt-faq'
  ) {
    return 'receipt'
  }
  return 'signature'
}

function parseFrontmatter(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (!match) {
    throw new Error('Knowledge article is missing frontmatter')
  }
  const data = {}
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    data[key] = line.slice(idx + 1).trim()
  }
  return { data, body: match[2].trim() }
}

function readLocale(locale) {
  const dir = join(contentRoot, locale)
  const files = readdirSync(dir).filter((name) => name.endsWith('.md'))
  const bySlug = new Map()
  for (const name of files) {
    const parsed = parseFrontmatter(readFileSync(join(dir, name), 'utf8'))
    const slug = parsed.data.slug
    if (!slug || !parsed.data.title || !parsed.data.description) {
      throw new Error(`Incomplete frontmatter in ${locale}/${name}`)
    }
    bySlug.set(slug, {
      title: parsed.data.title,
      description: parsed.data.description,
      cover: parsed.data.cover || '',
      category: parsed.data.category || '',
      published: parsed.data.published || '2026-10-16',
      updated: parsed.data.updated || parsed.data.published || '2026-10-16',
      topic: parsed.data.topic || topicFromSlug(slug),
      html: md.render(parsed.body)
    })
  }
  return bySlug
}

export function loadArticles() {
  const ar = readLocale('ar')
  const en = readLocale('en')
  const slugs = ARTICLE_ORDER.filter((slug) => ar.has(slug) && en.has(slug))
  for (const slug of ar.keys()) {
    if (!slugs.includes(slug) && en.has(slug)) slugs.push(slug)
  }
  return slugs.map((slug) => ({
    slug,
    ar: ar.get(slug),
    en: en.get(slug)
  }))
}
