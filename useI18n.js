import { ref } from 'vue'
import ar from '../locales/ar.json'
import en from '../locales/en.json'

const messages = {
  ar,
  en
}

const locale = ref('ar') // default 'ar'

// Initialize document attributes
document.documentElement.lang = 'ar'
document.documentElement.dir = 'rtl'

export function useI18n() {
  const t = (path) => {
    const keys = path.split('.')
    let current = messages[locale.value]
    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key]
      } else {
        return path
      }
    }
    return current
  }

  const toggleLocale = () => {
    locale.value = locale.value === 'ar' ? 'en' : 'ar'
    document.documentElement.lang = locale.value
    document.documentElement.dir = locale.value === 'ar' ? 'rtl' : 'ltr'
  }

  return {
    locale,
    t,
    toggleLocale
  }
}