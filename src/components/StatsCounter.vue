<script setup>
import { useStatsCounter } from '@/composables/useStatsCounter';
import { useLanguage } from '@/composables/useLanguage';

const { currentLang } = useLanguage();
const { stats, targetElement: statsSection } = useStatsCounter();
</script>

<template>
  <section ref="statsSection" class="py-20 stats-bg stats-border relative">
    <!-- Subtle Radial Glow Background -->
    <div class="absolute inset-0 stats-overlay pointer-events-none"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div 
        class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x stats-divider"
        :class="{ 'md:divide-x-reverse': currentLang === 'ar' }"
      >
        
        <div v-for="(stat, index) in stats" :key="index" class="pt-8 md:pt-0 px-4">
          <div class="text-5xl md:text-6xl font-black mb-2 tracking-tight" dir="ltr">
            <span class="stat-number">
              {{ stat.current }}{{ stat.suffix }}
            </span>
          </div>
          <div class="text-cyan-500 font-medium text-lg mb-2">
            {{ stat.label }}
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style src="@/assets/styles/StatsCounter.css"></style>