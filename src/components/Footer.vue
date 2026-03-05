<script setup>
import { useContactForm } from '@/composables/useContactForm';
import { useLanguage } from '@/composables/useLanguage';

const { t } = useLanguage();

const currentYear = new Date().getFullYear();

const socialLinks = [
  // Add actual links here
  { href: '#', icon: 'linkedin' },
  { href: '#', icon: 'twitter' },
];

// Contact Form Logic
const { form, errors, isSubmitting, showSuccess, handleSubmit } = useContactForm();
</script>

<template>
  <footer class="footer-section">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        <!-- Column 1: About -->
        <div>
          <h4 class="footer-title">{{ t('footer.stayConnected') }}</h4>
          <div class="space-y-4 footer-text">
            <p>{{ t('footer.address') }}</p>
            
            <!-- Google Map with Dark Filter -->
            <div class="rounded-lg overflow-hidden border border-white/10 h-32 w-full mt-2 shadow-lg map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.377099646166!2d31.7417853!3d30.2991789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1457fd32168e3065%3A0x5c843e4b0430065!2s10th%20of%20Ramadan%20City%2C%20Ash%20Sharqia%20Governorate!5e0!3m2!1sen!2seg!4v1684856741234!5m2!1sen!2seg" 
                width="100%" 
                height="100%" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>

            <a href="mailto:Info@dts-eg.net" class="footer-link">Info@dts-eg.net</a>
            <a href="tel:+20554492037" class="footer-link" dir="ltr">(+20) 55 4492037</a>
          </div>
          <div class="flex gap-4 mt-6">
            <!-- Social Icons -->
            <a v-for="link in socialLinks" :key="link.icon" :href="link.href" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-cyan-500 hover:text-white transition-all duration-300">
              <svg v-if="link.icon === 'linkedin'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              <svg v-if="link.icon === 'twitter'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
          </div>
        </div>

        <!-- Column 2: Quick Links -->
        <div>
          <h4 class="footer-title">{{ t('footer.learnMore') }}</h4>
          <ul class="space-y-3 footer-text">
            <li><a href="#about" class="footer-link">{{ t('nav.about') }}</a></li>
            <li><a href="#services" class="footer-link">{{ t('nav.services') }}</a></li>
            <li><a href="#partners" class="footer-link">{{ t('nav.partners') }}</a></li>
          </ul>
        </div>

        <!-- Column 3: Services -->
        <div>
          <h4 class="footer-title">{{ t('footer.needHelp') }}</h4>
          <ul class="space-y-4 footer-text">
            <li>
              <span class="footer-label">{{ t('footer.techSupport') }}</span>
              <a href="tel:+201024689100" class="footer-link" dir="ltr">(+20) 10 24689100</a>
              <a href="mailto:support@dts-eg.net" class="footer-link">support@dts-eg.net</a>
            </li>
             <li>
              <span class="footer-label">{{ t('footer.sales') }}</span>
              <a href="tel:+201000955267" class="footer-link" dir="ltr">(+20) 10 00955267</a>
              <a href="mailto:sales@dts-eg.net" class="footer-link">sales@dts-eg.net</a>
            </li>
          </ul>
        </div>

        <!-- Column 4: Newsletter -->
        <div>
          <h4 class="footer-title">{{ t('footer.sendMessage') }}</h4>
          
          <!-- Success Message -->
          <div v-if="showSuccess" class="success-box">
            <div class="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-[0_0_15px_rgba(16,185,129,0.4)]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h5 class="text-white font-bold mb-1">{{ t('footer.successTitle') }}</h5>
            <p class="text-emerald-400 text-sm">{{ t('footer.successMsg') }}</p>
          </div>

          <!-- Contact Form -->
          <form v-else @submit.prevent="handleSubmit" class="flex flex-col gap-3">
            <!-- Name -->
            <div>
              <input 
                v-model="form.name"
                type="text" 
                :placeholder="t('footer.form.name')" 
                class="form-input"
                :class="{'border-red-500/50': errors.name}"
              />
              <span v-if="errors.name" class="text-red-400 text-xs mt-1 block">{{ errors.name }}</span>
            </div>

            <!-- Phone -->
            <div>
              <input 
                v-model="form.phone"
                type="text" 
                :placeholder="t('footer.form.phone')" 
                class="form-input"
                :class="{'border-red-500/50': errors.phone}"
              />
              <span v-if="errors.phone" class="text-red-400 text-xs mt-1 block">{{ errors.phone }}</span>
            </div>

            <!-- Email -->
            <div>
              <input 
                v-model="form.email"
                type="email" 
                :placeholder="t('footer.form.email')" 
                class="form-input"
                :class="{'border-red-500/50': errors.email}"
              />
              <span v-if="errors.email" class="text-red-400 text-xs mt-1 block">{{ errors.email }}</span>
            </div>

            <!-- Message -->
            <div>
              <textarea 
                v-model="form.message"
                :placeholder="t('footer.form.message')" 
                rows="3"
                class="form-textarea resize-none"
                :class="{'border-red-500/50': errors.message}"
              ></textarea>
              <span v-if="errors.message" class="text-red-400 text-xs mt-1 block">{{ errors.message }}</span>
            </div>

            <button 
              type="submit"
              :disabled="isSubmitting"
              class="btn-submit w-full flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span v-if="isSubmitting" class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              <span>{{ isSubmitting ? t('footer.form.sending') : t('footer.form.send') }}</span>
            </button>
          </form>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <p class="text-slate-500 text-sm">
          &copy; {{ currentYear }} DTS {{ t('footer.rights') }}
        </p>
        <p class="text-slate-500 text-sm">
         {{ t('footer.developedBy') }} <a href="#" class="footer-link inline-block font-semibold">DTS</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<style src="@/assets/styles/footer.css"></style>