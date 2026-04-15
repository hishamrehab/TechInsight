import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { SafeImage } from '../components/shared/SafeImage'
import { api } from '../lib/api'
import type { Article, Category } from '../types/api'

function getCategoryFallbackImage(label: string) {
  const text = encodeURIComponent(label)
  return `https://placehold.co/800x480/0f172a/22d3ee?text=${text}`
}

function toReadMinutes(readTime: string) {
  const match = readTime.match(/\d+/)
  return match ? Number(match[0]) : 0
}

export function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [articles, setArticles] = useState<Article[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      try {
        const [fetchedCategories, fetchedArticles] = await Promise.all([api.getCategories(), api.getArticles()])
        setCategories(fetchedCategories)
        setArticles(fetchedArticles)
      } finally {
        setIsLoading(false)
      }
    }
    loadData()
  }, [])

  const categoriesWithCount = categories.map((category) => {
    const articleCount = category.articleCategory
      ? articles.filter((article) => article.category === category.articleCategory).length
      : 0
    return { ...category, articleCount }
  })

  const totalReadingMinutes = articles.reduce((total, article) => total + toReadMinutes(article.readTime), 0)
  const averageArticlesPerCategory = categories.length > 0 ? Math.round(articles.length / categories.length) : 0
  const featuredCategories = [...categoriesWithCount].sort((a, b) => b.articleCount - a.articleCount).slice(0, 3)

  return (
    <main className="page-shell">
      <section className="relative overflow-hidden pb-20 pt-20">
        <div className="absolute inset-0 z-0 h-80">
          <SafeImage
            src="https://readdy.ai/api/search-image?query=abstract%20technology%20categories%20visualization%20with%20multiple%20glowing%20hexagonal%20portals%20interconnected%20topic%20nodes%20floating%20category%20icons%20luminous%20pathways%20in%20cyan%20teal%20and%20electric%20blue%20colors%20against%20deep%20dark%20gradient%20with%20particle%20effects%20depth%20layers%20volumetric%20lighting&width=1920&height=600&seq=categories-hero-001&orientation=landscape"
            alt="Categories background"
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </div>

        <div className="content-container relative z-10 pb-12 pt-16">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/10 px-4 py-2 text-white backdrop-blur-md">
              <span className="text-cyan-400">◉</span>
              <span className="text-sm font-medium">Browse Topics</span>
            </div>
            <h1 className="mb-5 text-5xl font-extrabold leading-tight text-white">Explore Categories</h1>
            <p className="text-xl leading-relaxed text-white/90">
              Browse articles by topic. Find the latest insights in your area of interest.
            </p>
          </div>

          <div className="mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-cyan-400/25 bg-slate-950/55 p-4 backdrop-blur-md">
              <p className="text-xs uppercase tracking-wide text-cyan-200/85">Categories</p>
              <p className="mt-1 text-2xl font-bold text-white">{categories.length}</p>
            </div>
            <div className="rounded-xl border border-cyan-400/25 bg-slate-950/55 p-4 backdrop-blur-md">
              <p className="text-xs uppercase tracking-wide text-cyan-200/85">Published Articles</p>
              <p className="mt-1 text-2xl font-bold text-white">{articles.length}</p>
            </div>
            <div className="rounded-xl border border-cyan-400/25 bg-slate-950/55 p-4 backdrop-blur-md">
              <p className="text-xs uppercase tracking-wide text-cyan-200/85">Reading Time</p>
              <p className="mt-1 text-2xl font-bold text-white">{totalReadingMinutes} min</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-container pb-16">
        <div className="mb-8 grid grid-cols-1 gap-5 rounded-2xl border border-cyan-500/20 bg-slate-900/55 p-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Top Focus Areas</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-100">Featured categories this week</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Start with the most active categories and discover where the latest content is being published.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {featuredCategories.map((category) => (
                <NavLink
                  key={category.slug}
                  to={`/categories/${category.slug}`}
                  className="rounded-full border border-cyan-400/35 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-100 transition hover:border-cyan-300/70 hover:bg-cyan-500/20"
                >
                  {category.icon} {category.label} ({category.articleCount})
                </NavLink>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-cyan-500/20 bg-slate-950/55 p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-cyan-200/90">Quick insights</p>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <p className="flex items-center justify-between">
                <span>Average articles per category</span>
                <strong className="text-slate-100">{averageArticlesPerCategory}</strong>
              </p>
              <p className="flex items-center justify-between">
                <span>Most active category</span>
                <strong className="text-slate-100">
                  {featuredCategories[0] ? featuredCategories[0].label : 'N/A'}
                </strong>
              </p>
              <p className="flex items-center justify-between">
                <span>Explore all content</span>
                <NavLink className="text-cyan-300 hover:text-cyan-200" to="/articles">
                  Open articles
                </NavLink>
              </p>
            </div>
          </div>
        </div>

        {isLoading ? <p className="mb-4 text-sm text-slate-300">Loading categories...</p> : null}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categoriesWithCount.map((category) => {
            return (
              <NavLink
                key={category.slug}
                to={`/categories/${category.slug}`}
                className="surface-card surface-card-hover group flex cursor-pointer flex-col overflow-hidden rounded-xl"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <SafeImage
                    src={category.image}
                    fallbackSrc={getCategoryFallbackImage(category.label)}
                    alt={category.label}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="flex flex-grow flex-col p-6">
                  <h2 className="mb-2 text-xl font-semibold text-slate-100 transition-colors group-hover:text-cyan-200">
                    {category.label}
                  </h2>
                  <p className="mb-4 flex-grow text-sm leading-relaxed text-slate-300">{category.description}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-cyan-500/30 bg-slate-800/70 px-2.5 py-1 text-xs text-cyan-200">
                      {category.articleCount > 0 ? 'Active topic' : 'New topic'}
                    </span>
                    <span className="rounded-full border border-slate-500/40 bg-slate-900/70 px-2.5 py-1 text-xs text-slate-300">
                      {category.articleCount} guides
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-t border-cyan-500/20 pt-4">
                    <span className="text-sm font-medium text-slate-400">{category.articleCount} articles</span>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-cyan-300 transition-transform group-hover:translate-x-2">
                      Explore <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </div>
              </NavLink>
            )
          })}
        </div>
      </section>

      <section className="content-container pb-20">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <article className="surface-card rounded-2xl p-7">
            <p className="text-xs uppercase tracking-[0.16em] text-cyan-300">Suggested Learning Path</p>
            <h3 className="mt-3 text-2xl font-bold text-slate-100">Build momentum with structured reading</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Start with fundamentals, then move into trend analysis and implementation-focused walkthroughs. Curated
              category pages make it easier to level up in sequence.
            </p>
            <NavLink className="btn-primary mt-6" to="/articles">
              Start learning
            </NavLink>
          </article>

          <article className="surface-card rounded-2xl p-7">
            <p className="text-xs uppercase tracking-[0.16em] text-cyan-300">Need a custom topic?</p>
            <h3 className="mt-3 text-2xl font-bold text-slate-100">Tell us what content you need next</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              We expand categories based on what readers request most. Share your interests and we will prioritize
              new deep-dives and practical article series.
            </p>
            <NavLink className="btn-ghost mt-6" to="/about">
              Send feedback
            </NavLink>
          </article>
        </div>
      </section>
    </main>
  )
}
