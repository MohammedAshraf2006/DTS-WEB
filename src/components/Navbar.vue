<template>
  <nav 
    class="navbar"
    :class="{ 'scrolled': isScrolled }"
  >
    <div class="nav-container">
      <!-- Logo -->
      <a href="#" class="nav-logo">
        <img :src="logo" alt="DTS" class="h-10" />
      </a>

      <!-- Desktop Menu -->
      <div class="nav-links">
        <a v-for="item in navItems" :key="item.name" :href="item.href" class="nav-link">
          {{ item.name }}
        </a>
      </div>

      <!-- Actions -->
      <div class="flex items-center gap-2">
        <LanguageSwitcher />
        <ThemeSwitcher />
        
        <!-- Mobile Menu Button -->
        <button @click="toggleMobileMenu" class="mobile-toggle">
          <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="isMobileMenuOpen" class="md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 shadow-2xl">
        <a v-for="item in navItems" :key="item.name" :href="item.href" class="text-lg font-medium text-slate-300 hover:text-cyan-400 transition-colors" @click="isMobileMenuOpen = false">
          {{ item.name }}
        </a>
        <!-- <button class="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-lg shadow-lg active:scale-95 transition-transform">
          Get Started
        </button> -->
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useScrollAnimation } from '@/composables/useScrollAnimation';
import { useLanguage } from '@/composables/useLanguage';
import LanguageSwitcher from '@/shared/LanguageSwitcher.vue';
import ThemeSwitcher from '@/shared/ThemeSwitcher.vue';
import logo from '@/assets/images/logo.png';

const { t } = useLanguage();
const { isScrolled } = useScrollAnimation();
const isMobileMenuOpen = ref(false);

const navItems = computed(() => [
  { name: t('nav.home'), href: '#home' },
  { name: t('nav.services'), href: '#services' },
  { name: t('nav.products'), href: '#products' },
  { name: t('nav.about'), href: '#about' },
  { name: t('nav.partners'), href: '#partners' },
  { name: t('nav.contact'), href: '#contact' }
]);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<style src="@/assets/styles/navbar.css"></style>