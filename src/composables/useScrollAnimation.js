import { ref, onMounted, onUnmounted } from 'vue';

export function useScrollAnimation(threshold = 20) {
  const isScrolled = ref(false);

  const handleScroll = () => {
    isScrolled.value = window.scrollY > threshold;
  };

  onMounted(() => window.addEventListener('scroll', handleScroll));
  onUnmounted(() => window.removeEventListener('scroll', handleScroll));

  return { isScrolled };
}