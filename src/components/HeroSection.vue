<script setup>
import { ref, onMounted } from 'vue';
import { useLanguage } from '@/composables/useLanguage';

const { t } = useLanguage();
const isLoaded = ref(false);

onMounted(() => {
  // Trigger animations after mount
  setTimeout(() => {
    isLoaded.value = true;
  }, 100);
});
</script>

<template>
  <section class="hero-section">
    <div class="hero-content">
      <!-- Badge -->
      <div 
        class="hero-badge transition-all duration-700 transform"
        :class="isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
      >
        <span class="badge-dot"></span>
        <span class="badge-text">{{ t('heroSection.badge') }}</span>
      </div>

      <!-- Main Headline -->
      <h1 
        class="hero-title transition-all duration-700 delay-100 transform"
        :class="isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
      >
        {{ t('heroSection.title') }}
        <span class="gradient-text">{{ t('heroSection.titleHighlight') }}</span>
      </h1>

      <!-- Subheadline -->
      <p 
        class="hero-desc transition-all duration-700 delay-200 transform"
        :class="isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
      >
        {{ t('heroSection.description') }}
      </p>

      <!-- CTA Button -->
      <div 
        class="flex justify-center transition-all duration-700 delay-300 transform"
        :class="isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
      >
        <a href="#products" class="hero-btn group">
          <span>
            {{ t('heroSection.cta') }}
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<style src="@/assets/styles/hero.css"></style>