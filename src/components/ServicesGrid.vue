<script setup>
import { computed } from 'vue';
import { useLanguage } from '@/composables/useLanguage';

const { t } = useLanguage();

const services = computed(() => [
  {
    title: t('services.items.einvoicing.title'),
    description: t('services.items.einvoicing.desc'),
    icon: 'stamp',
  },
  {
    title: t('services.items.erp.title'),
    description: t('services.items.erp.desc'),
    icon: 'database',
  },
  {
    title: t('services.items.esignature.title'),
    description: t('services.items.esignature.desc'),
    icon: 'code',
  },
  {
    title: t('services.items.consulting.title'),
    description: t('services.items.consulting.desc'),
    icon: 'clipboard',
  },
  {
    title: t('services.items.integration.title'),
    description: t('services.items.integration.desc'),
    icon: 'settings',
  },
  {
    title: t('services.items.projectManagement.title'),
    description: t('services.items.projectManagement.desc'),
    icon: 'briefcase',
  },
  {
    title: t('services.items.training.title'),
    description: t('services.items.training.desc'),
    icon: 'users',
  },
  {
    title: t('services.items.support.title'),
    description: t('services.items.support.desc'),
    icon: 'headset',
  },
]);
</script>

<template>
  <section class="services-section">
    <div class="container mx-auto px-6">
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="section-title">
          {{ t('services.titlePrefix') }} <span style="color: var(--primary-cyan);">{{ t('services.titleHighlight') }}</span>
        </h2>
        <p class="hero-desc">
          {{ t('services.description') }}
        </p>
      </div>

      <!-- Grid -->
      <div class="services-grid">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="service-card"
        >
            <!-- Icon -->
            <div class="service-icon">
              <!-- Briefcase Icon -->
              <svg v-if="service.icon === 'briefcase'" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-400"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
              <!-- Clipboard Icon -->
              <svg v-if="service.icon === 'clipboard'" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-400"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
              <!-- Code Icon -->
              <svg v-if="service.icon === 'code'" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-400"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              <!-- Stamp Icon -->
              <svg v-if="service.icon === 'stamp'" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-400"><path d="M5 3v11a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3"></path><path d="M5 16h14"></path><path d="M10 10h4"></path><path d="M12 8v4"></path><path d="M12 16v4"></path></svg>
              <!-- Settings Icon -->
              <svg v-if="service.icon === 'settings'" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-400"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              <!-- Database Icon -->
              <svg v-if="service.icon === 'database'" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-400"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
              <!-- Users Icon -->
              <svg v-if="service.icon === 'users'" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-400"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              <!-- Headset Icon -->
              <svg v-if="service.icon === 'headset'" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-400"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
            </div>

            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-desc">
              {{ service.description }}
            </p>

        </div>
      </div>
    </div>
  </section>
</template>

<style src="@/assets/styles/services.css"></style>