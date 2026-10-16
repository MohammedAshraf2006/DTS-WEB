<script setup>
import { computed, nextTick, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { getArticle, listArticles } from '@/data/knowledge.generated.js'

const { t, locale } = useI18n()
const route = useRoute()
const router = useRouter()

const articles = computed(() => {
  void locale.value
  return listArticles(locale.value)
})

const activeSlug = computed(() => {
  const slug = route.params.slug
  if (slug) return slug
  return articles.value[0]?.slug || ''
})

const article = computed(() => {
  if (!activeSlug.value) return null
  return getArticle(activeSlug.value, locale.value)
})

watch(
  () => [route.name, route.params.slug, articles.value.length],
  () => {
    if (route.name === 'knowledge' && articles.value[0]) {
      router.replace({ name: 'knowledge-article', params: { slug: articles.value[0].slug } })
      return
    }
    if (route.name === 'knowledge-article' && route.params.slug && !article.value) {
      router.replace({ name: 'not-found' })
    }
  },
  { immediate: true }
)

watch(activeSlug, async (slug, prev) => {
  if (!slug || slug === prev) return
  await nextTick()
  const pane = document.getElementById('knowledge-article-pane')
  if (pane) pane.scrollTop = 0
})
</script>

<template>
  <article v-if="article" class="relative overflow-x-hidden bg-transparent pb-10 pt-20 lg:pb-16 lg:pt-24">
    <div class="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 items-start lg:grid-cols-[19.5rem_minmax(0,1fr)] xl:grid-cols-[21rem_minmax(0,1fr)]">
        <aside class="lg:sticky lg:top-24 lg:max-h-[calc(100dvh-6.5rem)] lg:overflow-y-auto lg:pe-10">
          <p class="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
            {{ t('knowledge.eyebrow') }}
          </p>
          <p class="mb-5 font-heading text-lg font-bold text-text-base">
            {{ t('knowledge.section') }}
          </p>
          <nav class="flex gap-1 overflow-x-auto pb-4 lg:flex-col lg:gap-0 lg:overflow-visible lg:pb-0">
            <RouterLink
              v-for="item in articles"
              :key="item.slug"
              :to="`/knowledge/${item.slug}`"
              class="shrink-0 border-b-2 px-1 py-2 text-base leading-snug transition-colors lg:w-full lg:border-b-0 lg:border-s-2 lg:px-4 lg:py-2.5"
              :class="item.slug === activeSlug
                ? 'border-primary font-bold text-text-base'
                : 'border-transparent font-normal text-text-muted hover:text-text-base'"
            >
              {{ item.title }}
            </RouterLink>
          </nav>
        </aside>

        <div id="knowledge-article-pane" class="min-w-0 max-w-5xl pt-2 lg:ps-12">
          <p class="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            {{ article.category }}
          </p>
          <h1 class="mt-2 break-words font-heading text-3xl font-extrabold tracking-tight text-text-base sm:text-4xl">
            {{ article.title }}
          </h1>
          <p class="mt-3 text-base font-medium leading-relaxed text-text-base sm:text-lg">
            {{ article.description }}
          </p>
          <div class="mt-5 h-40 overflow-hidden rounded-xl bg-surface sm:h-48">
            <img
              v-if="article.cover"
              :src="article.cover"
              :alt="article.title"
              class="h-full w-full object-cover"
            />
          </div>
          <div
            class="knowledge-body mt-8 text-[1.125rem] font-medium leading-[1.85] text-text-base"
            v-html="article.html"
          />
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.knowledge-body :deep(h2) {
  margin-top: 2rem;
  margin-bottom: 0.35rem;
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--color-text-base);
}

.knowledge-body :deep(h3) {
  margin-top: 1.35rem;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-text-base);
}

.knowledge-body :deep(p) {
  margin-top: 0.85rem;
}

.knowledge-body :deep(ul) {
  margin-top: 0.85rem;
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
