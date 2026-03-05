<script setup>
import { computed } from 'vue';
import { useLanguage } from '@/composables/useLanguage';

const { t } = useLanguage();

const products = computed(() => [
  {
    title: t('products.items.mts.title'),
    badge: t('products.items.mts.badge'),
    description: t('products.items.mts.description'),
    features: [
      t('products.items.mts.features.0'),
      t('products.items.mts.features.1'),
      t('products.items.mts.features.2'),
      t('products.items.mts.features.3')
    ],
    logo: '/images/mts-logo.png',
    icon: 'erp',
    color: 'var(--secondary-purple)'
  },
  {
    title: t('products.items.esa.title'),
    badge: t('products.items.esa.badge'),
    description: t('products.items.esa.description'),
    features: [
      t('products.items.esa.features.0'),
      t('products.items.esa.features.1'),
      t('products.items.esa.features.2'),
      t('products.items.esa.features.3')
    ],
    logo: '/images/esa-logo.png',
    color: '#10b981'
  },
  {
    title: t('products.items.ess.title'),
    badge: t('products.items.ess.badge'),
    description: t('products.items.ess.description'),
    features: [
      t('products.items.ess.features.0'),
      t('products.items.ess.features.1'),
      t('products.items.ess.features.2'),
      t('products.items.ess.features.3')
    ],
    logo: '/images/ess-logo.png',
    color: '#3b82f6'
  },
  {
    title: t('products.items.ers.title'),
    badge: t('products.items.ers.badge'),
    description: t('products.items.ers.description'),
    features: [
      t('products.items.ers.features.0'),
      t('products.items.ers.features.1'),
      t('products.items.ers.features.2'),
      t('products.items.ers.features.3')
    ],
    logo: '/images/ers-logo.png',
    icon: 'erp',
    color: 'var(--primary-cyan)'
  }
]);
</script>

<template>
  <section id="products" class="products-section">
    <div class="container mx-auto px-6">
      <div class="section-header">
        <h2 class="section-title">{{ t('products.titlePrefix') }} <span style="color: var(--primary-cyan);">{{ t('products.titleHighlight') }}</span></h2>
        <p class="hero-desc">{{ t('products.description') }}</p>
      </div>

      <div class="products-grid">
        <div v-for="(product, index) in products" :key="index" class="product-card">
          <div class="product-icon-wrapper">
            <div class="product-icon">
              <img v-if="product.logo" :src="product.logo" :alt="product.title" class="w-full h-full object-contain p-2" />
              <template v-else>
                <svg v-if="product.icon === 'erp'" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </template>
            </div>
            <div class="pulse-effect"></div>
          </div>

          <h3 class="product-title">{{ product.title }}</h3>
          <p class="product-desc">{{ product.description }}</p>

          <ul class="product-features">
            <li v-for="(feature, fIndex) in product.features" :key="fIndex">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="color: var(--primary-cyan);"><polyline points="20 6 9 17 4 12"/></svg>
              {{ feature }}
            </li>
          </ul>

          <button class="btn-details">{{ t('products.btnDetails') }}</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style src="@/assets/styles/products.css"></style>