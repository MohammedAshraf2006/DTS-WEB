<script setup>
import { computed } from 'vue';
import { useLanguage } from '@/composables/useLanguage';
const { t } = useLanguage();

const services = computed(() => [
  {
    // E-Invoicing & Receipt
    key: 'einvoicing',
    layout: 'lg:col-span-2',
    colorHex: '#f97316',
    colorClasses: {
      shadow: 'hover:shadow-xl hover:shadow-orange-500/20',
      bgGradient: 'from-orange-500/5',
      bgIcon: 'group-hover:bg-orange-500/20',
      iconShadow: 'group-hover:shadow-lg group-hover:shadow-orange-500/30',
      textIcon: 'group-hover:text-orange-500',
      textTitle: 'group-hover:text-orange-400',
    },
    iconPath: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z',
  },
  {
    // ERP System
    key: 'erp',
    colorClasses: {
      shadow: 'hover:shadow-xl hover:shadow-blue-500/20',
      bgGradient: 'from-blue-500/5',
      bgIcon: 'group-hover:bg-blue-500/20',
      iconShadow: 'group-hover:shadow-lg group-hover:shadow-blue-500/30',
      textIcon: 'group-hover:text-blue-500',
      textTitle: 'group-hover:text-blue-400',
    },
    layout: 'lg:col-span-1',
    colorHex: '#3b82f6',
    iconPath: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125',
  },
  {
    // E-Signature
    key: 'esignature',
    colorClasses: {
      shadow: 'hover:shadow-xl hover:shadow-purple-500/20',
      bgGradient: 'from-purple-500/5',
      bgIcon: 'group-hover:bg-purple-500/20',
      iconShadow: 'group-hover:shadow-lg group-hover:shadow-purple-500/30',
      textIcon: 'group-hover:text-purple-500',
      textTitle: 'group-hover:text-purple-400',
    },
    layout: 'lg:col-span-1',
    colorHex: '#8b5cf6',
    iconPath: 'M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z',
  },
  {
    // Consulting & Systems Analysis
    key: 'consulting',
    colorClasses: {
      shadow: 'hover:shadow-xl hover:shadow-green-500/20',
      bgGradient: 'from-green-500/5',
      bgIcon: 'group-hover:bg-green-500/20',
      iconShadow: 'group-hover:shadow-lg group-hover:shadow-green-500/30',
      textIcon: 'group-hover:text-green-500',
      textTitle: 'group-hover:text-green-400',
    },
    layout: 'lg:col-span-2',
    colorHex: '#22c55e',
    iconPath: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z',
  },
  {
    // Integration Services
    key: 'integration',
    colorClasses: {
      shadow: 'hover:shadow-xl hover:shadow-yellow-500/20',
      bgGradient: 'from-yellow-500/5',
      bgIcon: 'group-hover:bg-yellow-500/20',
      iconShadow: 'group-hover:shadow-lg group-hover:shadow-yellow-500/30',
      textIcon: 'group-hover:text-yellow-500',
      textTitle: 'group-hover:text-yellow-400',
    },
    layout: 'lg:col-span-2',
    colorHex: '#eab308',
    iconPath: 'M7.5 21L3 16.5m0 0L7.5 12M3 16.5h18m-7.5-14L21 7.5m0 0L16.5 12M21 7.5H3',
  },
  {
    // Project Management
    key: 'projectManagement',
    colorClasses: {
      shadow: 'hover:shadow-xl hover:shadow-indigo-500/20',
      bgGradient: 'from-indigo-500/5',
      bgIcon: 'group-hover:bg-indigo-500/20',
      iconShadow: 'group-hover:shadow-lg group-hover:shadow-indigo-500/30',
      textIcon: 'group-hover:text-indigo-500',
      textTitle: 'group-hover:text-indigo-400',
    },
    layout: 'lg:col-span-2',
    colorHex: '#6366f1',
    iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
  {
    // Training & Qualification
    key: 'training',
    colorClasses: {
      shadow: 'hover:shadow-xl hover:shadow-pink-500/20',
      bgGradient: 'from-pink-500/5',
      bgIcon: 'group-hover:bg-pink-500/20',
      iconShadow: 'group-hover:shadow-lg group-hover:shadow-pink-500/30',
      textIcon: 'group-hover:text-pink-500',
      textTitle: 'group-hover:text-pink-400',
    },
    layout: 'lg:col-span-2',
    colorHex: '#ec4899',
    iconPath: 'M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l-3.172 3.172a1 1 0 001.414 1.414l3.172-3.172m15.482 0l3.172 3.172a1 1 0 001.414-1.414l-3.172-3.172',
  },
  {
    // Specialized Technical Support
    key: 'support',
    colorClasses: {
      shadow: 'hover:shadow-xl hover:shadow-red-500/20',
      bgGradient: 'from-red-500/5',
      bgIcon: 'group-hover:bg-red-500/20',
      iconShadow: 'group-hover:shadow-lg group-hover:shadow-red-500/30',
      textIcon: 'group-hover:text-red-500',
      textTitle: 'group-hover:text-red-400',
    },
    layout: 'lg:col-span-2',
    colorHex: '#ef4444',
    iconPath: 'M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h2.64m-13.5 0L12 14.25m-2.64 6.75L12 14.25m6.36 6.75L12 14.25m2.12-10.88a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V3.37m-5.25 0a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V3.37m-5.25 0a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V3.37z',
  }
]);
</script>

<template>
  <section class="py-24 bg-slate-950 relative overflow-hidden">
    <!-- Decorative Background Elements -->
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" aria-hidden="true"></div>
    <div class="absolute -left-40 top-20 w-96 h-96 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none" aria-hidden="true"></div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-20" data-aos="fade-up">
        <span class="text-orange-500 text-sm font-bold tracking-widest uppercase mb-2 block">{{ t('services.badge') }}</span>
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">{{ t('services.titlePrefix') }} <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">{{ t('services.titleHighlight') }}</span></h2>
        <p class="text-gray-400 max-w-2xl mx-auto text-lg font-light">
          {{ t('services.description') }}
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="(service, index) in services" 
          :key="service.key" 
          class="group relative bento-card rounded-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
          :class="[service.layout, service.colorClasses.shadow]"
          :style="{ '--beam-color': service.colorHex }"
          @mousemove="e => {
            const card = e.currentTarget;
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
          }"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="relative z-10 p-8 h-full flex flex-col">
            <div class="absolute inset-0 bg-gradient-to-b to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" :class="service.colorClasses.bgGradient"></div>
            
            <div class="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-8 transition-all duration-300" :class="[service.colorClasses.bgIcon, service.colorClasses.iconShadow]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-white transition-colors" :class="service.colorClasses.textIcon">
                <path stroke-linecap="round" stroke-linejoin="round" :d="service.iconPath" />
              </svg>
            </div>
            
            <h3 class="text-2xl font-bold text-white mb-4 transition-colors" :class="service.colorClasses.textTitle">{{ t(`services.items.${service.key}.title`) }}</h3>
            <p class="text-gray-400 leading-relaxed flex-grow">{{ t(`services.items.${service.key}.desc`) }}</p>

            <div class="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 text-white/30">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>