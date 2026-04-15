import { useEffect, useState } from 'react'
import { NavLink, Navigate, useParams } from 'react-router-dom'
import { SafeImage } from '../components/shared/SafeImage'
import { api } from '../lib/api'
import type { Article, Category } from '../types/api'

function getArticleFallbackImage(title: string) {
  const text = encodeURIComponent(title)
  return `https://placehold.co/800x600/0f172a/22d3ee?text=${text}`
}

export function CategoryDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const [category, setCategory] = useState<Category | null>(null)
  const [articles, setArticles] = useState<Article[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!slug) {
      setIsLoading(false)
      return
    }
    const categorySlug: string = slug

    async function loadData() {
      try {
        const [fetchedCategory, fetchedArticles] = await Promise.all([api.getCategoryBySlug(categorySlug), api.getArticles()])
        setCategory(fetchedCategory)
        setArticles(fetchedArticles)
      } catch {
        setCategory(null)
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [slug])

  if (isLoading) {
    return (
      <main className="page-shell pt-36">
        <div className="content-container text-slate-300">Loading category...</div>
      </main>
    )
  }

  if (!category) {
    return <Navigate to="/not-found" replace />
  }

  const relatedArticles = category.articleCategory
    ? articles.filter((article) => article.category === category.articleCategory)
    : []

  return (
    <main className="page-shell">
      <section className="relative overflow-hidden pb-16 pt-20">
        <div className="absolute inset-0 z-0 h-96">
          <SafeImage alt={`${category.label} background`} className="h-full w-full object-cover object-top" src={category.image} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/70" />
        </div>

        <div className="content-container relative z-10 pt-14">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/35 bg-white/10 px-4 py-2 text-white backdrop-blur-md">
              <span>{category.icon}</span>
              <span className="text-sm font-medium">Category Details</span>
            </div>
            <h1 className="mb-4 text-5xl font-extrabold leading-tight text-white">{category.label}</h1>
            <p className="text-lg leading-relaxed text-white/90">{category.description}</p>
          </div>
        </div>
      </section>

      <section className="content-container py-14">
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 className="text-3xl font-bold text-slate-100">
            {relatedArticles.length > 0 ? `Articles in ${category.label}` : `Coming soon in ${category.label}`}
          </h2>
          <NavLink className="btn-ghost" to="/categories">
            View all categories
          </NavLink>
        </div>

        {relatedArticles.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((article) => (
              <NavLink
                key={article.id}
                className="surface-card surface-card-hover group overflow-hidden rounded-xl"
                to={`/article/${article.id}`}
              >
                <div className="h-48 w-full overflow-hidden">
                  <SafeImage
                    alt={article.title}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    src={article.image}
                    fallbackSrc={getArticleFallbackImage(article.title)}
                  />
                </div>
                <div className="p-5">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="rounded-full border border-cyan-500/35 bg-cyan-500/15 px-2.5 py-1 text-xs font-semibold text-cyan-200">{article.category}</span>
                    <span className="text-xs text-slate-400">{article.readTime}</span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-100 transition-colors group-hover:text-cyan-200">{article.title}</h3>
                  <p className="text-sm text-slate-300">{article.excerpt}</p>
                </div>
              </NavLink>
            ))}
          </div>
        ) : (
          <div className="surface-card rounded-2xl p-8 text-center">
            <p className="text-slate-300">
              We are preparing dedicated content for this category. In the meantime, you can explore all published
              articles.
            </p>
            <NavLink className="btn-primary mt-6" to="/articles">
              Explore all articles
            </NavLink>
          </div>
        )}
      </section>
    </main>
  )
}
