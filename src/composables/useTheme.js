import { ref, onMounted, watch } from 'vue';

const theme = ref('dark');

export function useTheme() {
  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark';
  };

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      theme.value = savedTheme;
    }
    // تطبيق الثيم عند التحميل
    document.documentElement.setAttribute('data-theme', theme.value);
  });

  watch(theme, (newTheme) => {
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  });

  return { theme, toggleTheme };
}