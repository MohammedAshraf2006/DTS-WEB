import { ref } from 'vue';
import ar from '@/locales/ar.json';
import en from '@/locales/en.json';

const translations = { ar, en };
const currentLang = ref('ar');

export function useLanguage() {
  const toggleLanguage = () => {
    currentLang.value = currentLang.value === 'ar' ? 'en' : 'ar';
    document.documentElement.dir = currentLang.value === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang.value;
  };

  const t = (key) => {
    return key.split('.').reduce((o, i) => o?.[i], translations[currentLang.value]) || key;
  };

  return {
    currentLang,
    toggleLanguage,
    t
  };
}