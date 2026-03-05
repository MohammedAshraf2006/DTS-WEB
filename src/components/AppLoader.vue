<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isLoading = ref(true);
const isDarkMode = ref(false);
let observer = null;

const updateTheme = () => {
  isDarkMode.value = document.documentElement.getAttribute('data-theme') !== 'light';
};

onMounted(() => {
  updateTheme();

  // مراقبة تغييرات الثيم لتحديث اللوجو فوراً في حال تغير الثيم أثناء التحميل
  observer = new MutationObserver(updateTheme);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  // إخفاء شاشة التحميل بعد 1000 مللي ثانية (ثانية واحدة)
  setTimeout(() => {
    isLoading.value = false;
    if (observer) observer.disconnect();
  }, 1000); // تم إرجاع المدة إلى ثانية واحدة كما طلبت أولاً
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<template>
  <Transition name="fade">
    <div v-if="isLoading" class="loader-overlay">
      <div class="loader-content">
        <!-- يتم عرض اللوجو المناسب بناءً على وضع العرض -->
        <img v-if="!isDarkMode" src="/images/dts-logo.png" alt="DTS Logo" class="logo" />
        <img v-else src="/images/dts-logo-dd.png" alt="DTS Logo" class="logo" />
      </div>
    </div>
  </Transition>
</template>

<style src="@/assets/styles/appLoader.css"></style>