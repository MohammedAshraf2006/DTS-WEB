const gaId = () => import.meta.env.VITE_GA4_MEASUREMENT_ID || ''
const pixelId = () => import.meta.env.VITE_META_PIXEL_ID || ''
const gsc = () => import.meta.env.VITE_GSC_VERIFICATION || ''

function injectScript(src, attrs = {}) {
  if (document.querySelector(`script[src="${src}"]`)) return
  const el = document.createElement('script')
  el.src = src
  el.async = true
  Object.entries(attrs).forEach(([key, value]) => {
    el.setAttribute(key, value)
  })
  document.head.appendChild(el)
}

export function initAnalytics() {
  const verification = gsc()
  if (verification && !document.querySelector('meta[name="google-site-verification"]')) {
    const meta = document.createElement('meta')
    meta.setAttribute('name', 'google-site-verification')
    meta.setAttribute('content', verification)
    document.head.appendChild(meta)
  }

  const measurement = gaId()
  if (measurement && !window.gtag) {
    injectScript(`https://www.googletagmanager.com/gtag/js?id=${measurement}`)
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() {
      window.dataLayer.push(arguments)
    }
    window.gtag('js', new Date())
    window.gtag('config', measurement, { send_page_view: false })
  }

  const pixel = pixelId()
  if (pixel && !window.fbq) {
    /* eslint-disable */
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      }
      if (!f._fbq) f._fbq = n
      n.push = n
      n.loaded = true
      n.version = '2.0'
      n.queue = []
      t = b.createElement(e)
      t.async = true
      t.src = v
      s = b.getElementsByTagName(e)[0]
      s.parentNode.insertBefore(t, s)
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')
    /* eslint-enable */
    window.fbq('init', pixel)
  }
}

export function trackPageView(path) {
  const measurement = gaId()
  if (measurement && window.gtag) {
    window.gtag('event', 'page_view', { page_path: path })
  }
  if (pixelId() && window.fbq) {
    window.fbq('track', 'PageView')
  }
}

export function trackEvent(name, params = {}) {
  const measurement = gaId()
  if (measurement && window.gtag) {
    window.gtag('event', name, params)
  }
  if (pixelId() && window.fbq) {
    if (name === 'generate_lead' || name === 'signature_lead') {
      window.fbq('track', 'Lead')
    } else if (name === 'click_whatsapp' || name === 'click_call') {
      window.fbq('track', 'Contact')
    }
  }
}
