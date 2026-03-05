<template>
  <section id="contact" class="py-16 bg-white">
    <h2 class="text-3xl font-bold text-center mb-6">{{ t('contactForm.title') }}</h2>
    <form
      @submit.prevent="submitForm"
      class="max-w-lg mx-auto space-y-4"
    >
      <input type="text" v-model="name" :placeholder="t('contactForm.name')" class="input" required />
      <input type="email" v-model="email" :placeholder="t('contactForm.email')" class="input" required />
      <textarea v-model="message" :placeholder="t('contactForm.message')" class="input" required></textarea>
      <button class="bg-blue-700 text-white px-6 py-2 rounded-md">{{ t('contactForm.submit') }}</button>
    </form>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '@/shared/useLanguage';

const { t } = useLanguage();
const name = ref('')
const email = ref('')
const message = ref('')

function submitForm() {
  alert(t('contactForm.success'))
}
</script>
