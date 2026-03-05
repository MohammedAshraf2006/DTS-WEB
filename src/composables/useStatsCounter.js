import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useLanguage } from '@/composables/useLanguage';

export function useStatsCounter() {
  const { t } = useLanguage();

  const stats = ref([
    { key: 'stats.clients', value: 50000, suffix: '+', current: 0 },
    { key: 'stats.growth', value: 95, suffix: '%', current: 0 },
    { key: 'stats.experts', value: 1000, suffix: '+', current: 0 }
  ]);

  const targetElement = ref(null);
  let observer = null;

  const animateStats = () => {
    stats.value.forEach(stat => {
      let start = 0;
      const end = stat.value;
      const duration = 2000; // مدة الأنيميشن 2 ثانية
      const frameDuration = 1000 / 60; // تحديث كل 16 مللي ثانية (60 FPS)
      const totalFrames = Math.max(duration / frameDuration, 1);
      const increment = end / totalFrames;
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          stat.current = end;
          clearInterval(timer);
        } else {
          stat.current = Math.floor(start);
        }
      }, frameDuration);
    });
  };

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateStats();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    if (targetElement.value) {
      observer.observe(targetElement.value);
    }
  });

  onUnmounted(() => {
    if (observer) observer.disconnect();
  });

  const displayStats = computed(() => stats.value.map(stat => ({
    ...stat,
    label: t(stat.key)
  })));

  return {
    stats: displayStats,
    targetElement
  };
}