<script setup>
import { useLanguage } from '@/composables/useLanguage';

const { t } = useLanguage();

// Duplicated list to create infinite scroll effect
const clients = [
  { name: 'M.T.S', logo: '/images/partners/mts.png' },
  { name: 'GS1', logo: '' },
  { name: 'G.A.T', logo: '' },
  { name: 'FEDIS', logo: '/images/partners/fedis.png' },
  { name: 'SYSGOT', logo: '' },
  { name: 'tawqe3y', logo: '/images/partners/tawqe3y.png' },
  { name: 'M.T.S', logo: '/images/partners/mts.png' },
  { name: 'GS1', logo: '' },
  { name: 'G.A.T', logo: '' },
  { name: 'FEDIS', logo: '/images/partners/fedis.png' },
  { name: 'SYSGOT', logo: '' },
  { name: 'tawqe3y', logo: '/images/partners/tawqe3y.png' }
];
</script>

<template>
  <section class="clients-section">
    <div class="container mx-auto px-6 mb-8 text-center">
      <h2 class="section-title">{{ t('clients.titlePrefix') }} <span style="color: var(--primary-cyan);">{{ t('clients.titleHighlight') }}</span></h2>
      <p class="hero-desc">{{ t('clients.description') }}</p>
    </div>
    
    <div class="clients-display-wrapper">
      <div class="clients-slider">
        <div v-for="(client, index) in clients" :key="index" class="client-item">
          <div class="client-content">
            <img v-if="client.logo" :src="client.logo" :alt="client.name" class="client-logo" />
            <span v-else class="client-text">{{ client.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style src="@/assets/styles/clients.css"></style>