<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import AppIcon from '@/components/icons/AppIcon.vue'
import { listArticles } from '@/data/knowledge.generated.js'

const { t, locale } = useI18n()

const articles = computed(() => listArticles(locale.value).slice(0, 3))
</script>

<template>
  <section id="articles" class="bg-transparent py-12 lg:py-16">
    <div class="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl">
        <h2 class="font-heading text-4xl font-bold text-text-base sm:text-5xl">
          {{ t('home.articles.title') }}
        </h2>
        <p class="mt-3 text-base leading-relaxed text-text-muted">
          {{ t('home.articles.subtitle') }}
        </p>
      </div>

      <ul class="mt-8 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface-alt">
        <li v-for="article in articles" :key="article.slug">
          <RouterLink
            :to="`/knowledge/${article.slug}`"
            class="flex items-center gap-4 px-4 py-4 transition-colors hover:bg-primary-light/40 sm:gap-5 sm:px-6"
          >
            <img
              v-if="article.cover"
              :src="article.cover"
              :alt="article.title"
              class="h-14 w-20 shrink-0 rounded-lg object-cover sm:h-16 sm:w-24"
              loading="lazy"
              decoding="async"
            />
            <span class="min-w-0 flex-1">
              <span class="block font-heading text-base font-bold text-text-base sm:text-lg">
                {{ article.title }}
              </span>
              <span class="mt-1 line-clamp-1 block text-sm text-text-muted">
                {{ article.description }}
              </span>
            </span>
            <AppIcon name="arrowLeft" class="h-4 w-4 shrink-0 text-primary rtl:block ltr:hidden" />
            <AppIcon name="arrowRight" class="h-4 w-4 shrink-0 text-primary ltr:block rtl:hidden" />
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/knowledge"
            class="flex items-center justify-center gap-2 px-4 py-4 text-base font-bold text-primary transition-colors hover:bg-primary-light/40 sm:px-6 sm:text-lg"
          >
            {{ t('home.articles.cta') }}
            <AppIcon name="arrowLeft" class="h-5 w-5 rtl:block ltr:hidden" />
            <AppIcon name="arrowRight" class="h-5 w-5 ltr:block rtl:hidden" />
          </RouterLink>
        </li>
      </ul>
    </div>
  </section>
</template>
