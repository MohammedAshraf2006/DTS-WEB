<script setup>
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { getArticle, listArticles } from '@/data/knowledge.generated.js'
import { trackEvent } from '@/analytics/track.js'
import AppIcon from '@/components/icons/AppIcon.vue'

const { t, locale } = useI18n()
const route = useRoute()
const router = useRouter()

const article = computed(() => getArticle(route.params.slug, locale.value))

const related = computed(() => {
  if (!article.value) return []
  return listArticles(locale.value)
    .filter((item) => item.slug !== article.value.slug && item.topic === article.value.topic)
    .slice(0, 3)
})

const publishedLabel = computed(() => {
  if (!article.value?.published) return ''
  try {
    return new Intl.DateTimeFormat(locale.value === 'en' ? 'en-GB' : 'ar-EG', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(new Date(`${article.value.published}T00:00:00`))
  } catch {
    return article.value.published
  }
})

watch(
  article,
  (value) => {
    if (!value) {
      router.replace({ name: 'not-found' })
      return
    }
    trackEvent('view_knowledge_article', { article_slug: value.slug })
  },
  { immediate: true }
)
</script>

<template>
  <article v-if="article" class="relative overflow-x-hidden bg-transparent pb-12 pt-20 lg:pb-16 lg:pt-24">
    <div class="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-8">
      <RouterLink
        to="/knowledge"
        class="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover"
      >
        <AppIcon name="arrowRight" class="h-4 w-4 rtl:block ltr:hidden" />
        <AppIcon name="arrowLeft" class="h-4 w-4 ltr:block rtl:hidden" />
        {{ t('knowledge.back') }}
      </RouterLink>

      <p class="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
        {{ article.category }}
      </p>
      <h1 class="mt-2 break-words font-heading text-2xl font-extrabold tracking-tight text-text-base sm:text-4xl">
        {{ article.title }}
      </h1>
      <p class="mt-3 text-sm font-medium leading-relaxed text-text-base sm:text-lg">
        {{ article.description }}
      </p>
      <p class="mt-3 text-xs text-text-muted sm:text-sm">
        {{ t('knowledge.byline', { date: publishedLabel }) }}
      </p>

      <div class="mt-5 overflow-hidden rounded-xl bg-surface sm:mt-8 sm:rounded-2xl">
        <img
          v-if="article.cover"
          :src="article.cover"
          :alt="article.title"
          class="h-44 w-full object-cover sm:h-72 lg:h-[22rem]"
        />
      </div>

      <div
        class="knowledge-body mt-6 max-w-none text-[1.05rem] font-medium leading-[1.8] text-text-base sm:mt-10 sm:text-[1.2rem] sm:leading-[1.9]"
        v-html="article.html"
      />

      <div v-if="related.length" class="mt-12 border-t border-border pt-8">
        <h2 class="font-heading text-xl font-bold text-text-base">{{ t('knowledge.more') }}</h2>
        <ul class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <li v-for="item in related" :key="item.slug">
            <RouterLink
              :to="`/knowledge/${item.slug}`"
              class="block rounded-xl border border-border bg-surface-alt p-4 hover:border-primary"
            >
              <span class="font-heading text-base font-bold text-text-base">{{ item.title }}</span>
              <span class="mt-1 line-clamp-2 block text-sm text-text-muted">{{ item.description }}</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

<style scoped>
.knowledge-body :deep(h2) {
  margin-top: 1.5rem;
  margin-bottom: 0.35rem;
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--color-text-base);
}

@media (min-width: 640px) {
  .knowledge-body :deep(h2) {
    margin-top: 2rem;
    font-size: 1.4rem;
  }
}

.knowledge-body :deep(h3) {
  margin-top: 1.35rem;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-text-base);
}

.knowledge-body :deep(p),
.knowledge-body :deep(ul) {
  margin-top: 0.85rem;
}

.knowledge-body :deep(ul) {
  list-style: disc;
  padding-inline-start: 1.35rem;
}

.knowledge-body :deep(li + li) {
  margin-top: 0.4rem;
}

.knowledge-body :deep(a) {
  font-weight: 600;
  color: var(--color-primary);
}

.knowledge-body {
  overflow-wrap: break-word;
}
</style>
