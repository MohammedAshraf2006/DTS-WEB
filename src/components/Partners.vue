<script setup>
import { computed } from 'vue';
import { useLanguage } from '@/composables/useLanguage';

const { t } = useLanguage();

const partners = computed(() => [
  { 
    name: t('partners.items.mtsName'), 
    description: t('partners.items.mtsDesc'),
    logo: '/images/partners/mts.png'
  },
  { 
    name: t('partners.items.fedisName'), 
    description: t('partners.items.fedisDesc'),
    logo: '/images/partners/fedis.png'
  },
  { 
    name: t('partners.items.tawqe3yName'), 
    description: t('partners.items.tawqe3yDesc'),
    logo: '/images/partners/tawqe3y.png'
  },
]);
</script>

<template>
  <section class="partners-section">
    <div class="partners-container">
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="section-title">
          {{ t('partners.titlePrefix') }} <span style="color: var(--primary-cyan);">{{ t('partners.titleHighlight') }}</span>
        </h2>
        <p class="hero-desc">
          {{ t('partners.description') }}
        </p>
      </div>

      <!-- Partners Grid -->
      <div class="partners-grid">
        <div v-for="partner in partners" :key="partner.name" class="partner-card">
          <div class="partner-logo-wrapper">
            <img :src="partner.logo" :alt="partner.name" class="partner-logo" />
          </div>
          <h3 class="partner-name">{{ partner.name }}</h3>
          <p class="partner-desc">{{ partner.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style src="@/assets/styles/partners.css"></style>