<template>
  <header class="bg-blue-900 text-white px-8 py-4 fixed top-0 w-full z-20">
    <div class="flex justify-between items-center">
      <img :src="logo" class="h-10" alt="logo" />
      <nav class="space-x-6">
        <a href="#services" class="hover:text-orange-400">{{ t('header.services') }}</a>
        <a href="#about" class="hover:text-orange-400">{{ t('header.about') }}</a>
        <a href="#contact" class="hover:text-orange-400">{{ t('header.contact') }}</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import logo from '@/assets/images/logo.png'
import { useLanguage } from '@/composables/useLanguage';

const { t } = useLanguage();
</script>
