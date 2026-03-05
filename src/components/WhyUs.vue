<script setup>
import { computed } from 'vue';
import { useLanguage } from '@/composables/useLanguage';

const { t } = useLanguage();

const features = computed(() => [
  { title: t('whyUs.items.integrity.title'), desc: t('whyUs.items.integrity.desc') },
  { title: t('whyUs.items.integrated.title'), desc: t('whyUs.items.integrated.desc') },
  { title: t('whyUs.items.flexibility.title'), desc: t('whyUs.items.flexibility.desc') },
  { title: t('whyUs.items.responsibility.title'), desc: t('whyUs.items.responsibility.desc') },
  { title: t('whyUs.items.development.title'), desc: t('whyUs.items.development.desc') },
  { title: t('whyUs.items.simplicity.title'), desc: t('whyUs.items.simplicity.desc') },
  { title: t('whyUs.items.quality.title'), desc: t('whyUs.items.quality.desc') },
  { title: t('whyUs.items.security.title'), desc: t('whyUs.items.security.desc') },
]);
</script>

<template>
  <section class="whyus-section">
    <div class="container mx-auto px-6">
      <div class="section-header">
        <h2 class="section-title">{{ t('whyUs.titlePrefix') }} <span style="color: var(--secondary-purple);">{{ t('whyUs.titleHighlight') }}</span></h2>
        <p class="hero-desc">
          {{ t('whyUs.description') }}
        </p>
      </div>

      <div class="whyus-grid">
        <div v-for="(feature, index) in features" :key="index" class="whyus-card">
          <h3 class="whyus-title">{{ feature.title }}</h3>
          <p class="whyus-desc">{{ feature.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style src="@/assets/styles/whyus.css"></style>