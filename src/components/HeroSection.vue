<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useLanguage } from '@/composables/useLanguage';

const { t } = useLanguage();
const isLoaded = ref(false);
const heroVisual = ref(null);
let vantaEffect = null;

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true;
  }, 100);

  if (typeof window !== 'undefined' && window.VANTA?.GLOBE && heroVisual.value) {
    vantaEffect = window.VANTA.GLOBE({
      el: heroVisual.value,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0x0b1333,
      color: 0x3f6eff,
      color2: 0x7ce3ff,
      size: 0.7,
    });
  }
});

onBeforeUnmount(() => {
  if (vantaEffect?.destroy) {
    vantaEffect.destroy();
    vantaEffect = null;
  }
});

// Reuses real service titles already defined in the locale files —
// no invented copy, just a compact preview of what's in the Services section.
const chipKeys = [
  'services.items.einvoicing.title',
  'services.items.erp.title',
  'services.items.esignature.title',
  'services.items.consulting.title',
];
const chips = computed(() => chipKeys.map((k) => t(k)));
</script>

<template>
  <section class="hero-section">
    <!-- Signature visual: irregular triangulated network mesh, same
         language as the globe mark in the DTS logo — not a generic
         lat/long wireframe sphere. Low opacity, sits behind the copy. -->
    <div ref="heroVisual" class="hero-visual" aria-hidden="true"></div>

    <div class="hero-content">
      <h1
        class="hero-title transition-all duration-700 delay-100 transform"
        :class="isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
      >
        {{ t('heroSection.title') }}
        <span class="gradient-text">{{ t('heroSection.titleHighlight') }}</span>
      </h1>

      <p
        class="hero-desc transition-all duration-700 delay-200 transform"
        :class="isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
      >
        {{ t('heroSection.description') }}
      </p>

      <div
        class="hero-ctas transition-all duration-700 delay-300 transform"
        :class="isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
      >
        <a href="#products" class="hero-btn">
          <span>{{ t('heroSection.cta') }}</span>
        </a>
        <a href="#contact" class="hero-btn-ghost">
          <span>{{ t('nav.contact') }}</span>
        </a>
      </div>

      <div
        class="hero-chips transition-all duration-700 delay-[400ms] transform"
        :class="isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
      >
        <span v-for="chip in chips" :key="chip" class="hero-chip">{{ chip }}</span>
      </div>
    </div>

    <div class="hero-scroll-cue" aria-hidden="true"></div>
  </section>
</template>

<style src="@/assets/styles/hero.css"></style>
