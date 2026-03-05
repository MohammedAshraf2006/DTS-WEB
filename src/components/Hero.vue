<template>
  <section
    ref="heroSection"
    class="relative min-h-screen flex flex-col justify-center items-center overflow-hidden hero-bg"
  >
    <!-- Background Mesh Gradient -->
    <div class="absolute inset-0 -z-10">
      <div 
        ref="float1" 
        class="absolute -top-1/4 left-0 w-full h-full bg-indigo-500/15 rounded-full blur-3xl animate-float-1"
        style="transition: margin-top 0.5s cubic-bezier(0.22, 1, 0.36, 1);"
      ></div>
      <div 
        ref="float2" 
        class="absolute -bottom-1/4 right-0 w-full h-full bg-teal-500/15 rounded-full blur-3xl animate-float-2"
        style="transition: margin-top 0.5s cubic-bezier(0.22, 1, 0.36, 1);"
      ></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 container mx-auto px-4 text-center py-32" data-aos="fade-up">
      <div class="inline-block mb-6 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 backdrop-blur-md">
        <span class="text-orange-400 text-sm font-semibold tracking-wider uppercase">{{ t('hero.badge') }}</span>
      </div>

      <h1 class="text-5xl md:text-7xl font-extrabold hero-title-text mb-6 leading-tight tracking-[-0.02em]">
        {{ t('hero.titlePrefix') }} <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">{{ t('hero.titleHighlight') }}</span> {{ t('hero.titleSuffix') }}
      </h1>
      
      <p class="text-lg md:text-2xl text-white/70 mb-10 max-w-3xl mx-auto font-light leading-8">
        {{ t('hero.description') }}
      </p>
      
      <div class="flex flex-col sm:flex-row gap-5 justify-center items-center">
        <button class="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl text-white font-bold text-lg shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-500 hover:scale-105">
          <span>{{ t('hero.ctaPrimary') }}</span>
        </button>
        
        <button class="px-8 py-4 rounded-xl text-white font-medium text-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
          {{ t('hero.ctaSecondary') }}
        </button>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60 animate-bounce">
      <span class="text-[10px] text-gray-400 uppercase tracking-[0.2em]">Scroll</span>
      <div class="w-[1px] h-12 bg-gradient-to-b from-orange-500 to-transparent"></div>
    </div>
  </section>
</template>

<script setup>
import { useLanguage } from '@/composables/useLanguage';
import { ref, onMounted, onUnmounted } from 'vue';

const { t } = useLanguage();

const float1 = ref(null);
const float2 = ref(null);

const handleScroll = () => {
  const scrollY = window.scrollY;
  if (float1.value) {
    // Move up at a slower rate
    float1.value.style.marginTop = `${scrollY * 0.2}px`;
  }
  if (float2.value) {
    // Move up at a slightly different, faster rate
    float2.value.style.marginTop = `${scrollY * 0.35}px`;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style src="@/assets/styles/hero.css"></style>