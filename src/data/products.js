/**
 * Shared product catalog (identifiers + media only).
 * Drop files under public/, then set gallery src/poster.
 * Images: WebP (run `npm run optimize:images` after dropping PNG/JPG).
 * Videos: MP4 (H.264) under public/videos/{ess,ers,esa}/ — max ~720p, always set a WebP poster.
 * ESA Lite installer: productsCatalog.esa.liteDownloadUrl
 */
export const PRODUCT_KEYS = ['ess', 'ers', 'esa']

export const productsCatalog = {
  ess: {
    key: 'ess',
    logo: '/images/Products/ess-logo.webp',
    tint: 'ess',
    gallery: [
      { type: 'video', src: '', poster: '' },
      { type: 'image', src: '' },
      { type: 'image', src: '' },
      { type: 'image', src: '' },
      { type: 'image', src: '' }
    ]
  },
  ers: {
    key: 'ers',
    logo: '/images/Products/ers-logo.webp',
    tint: 'ers',
    gallery: [
      { type: 'video', src: '', poster: '' },
      { type: 'image', src: '' },
      { type: 'image', src: '' },
      { type: 'image', src: '' },
      { type: 'image', src: '' }
    ]
  },
  esa: {
    key: 'esa',
    logo: '/images/Products/esa-logo.webp',
    tint: 'esa',
    liteDownloadUrl:
      'https://github.com/Mohamedosama-dts/ESA-Lite/releases/download/v2.1.1/ESA_Lite_en.msi',
    gallery: [
      { type: 'video', src: '/images/Products/media/esa/ESA.mp4', poster: '/images/Products/media/esa/ESA.webp' },
      { type: 'image', src: '/images/Products/media/esa/esa-light-ar.webp' },
      { type: 'image', src: '/images/Products/media/esa/esa-light-en.webp' },
      { type: 'image', src: '/images/Products/media/esa/esa-dark-ar.webp' },
      { type: 'image', src: '/images/Products/media/esa/esa-dark-en.webp' }
    ]
  }
}

export function isProductKey(key) {
  return PRODUCT_KEYS.includes(key)
}

export function getProduct(key) {
  return productsCatalog[key] || null
}

export function hasMediaSrc(item) {
  return typeof item?.src === 'string' && item.src.trim().length > 0
}

export function galleryWithSrc(product) {
  return (product?.gallery || []).filter(hasMediaSrc)
}

export function firstMedia(product) {
  const items = galleryWithSrc(product)
  return items.find((item) => item.type === 'video') || items[0] || null
}

/** Listing/home teaser: select appropriate image based on theme and language */
export function listingPreview(product) {
  if (!product?.gallery) return null
  
  // Find the first image in gallery
  const imageItem = product.gallery.find(item => item.type === 'image')
  if (!imageItem) return null
  
  return {
    type: 'image',
    src: imageItem.src
  }
}

/** Get video for product pages */
export function productVideo(product) {
  if (!product?.video) return null
  return {
    type: 'video',
    src: product.video
  }
}
