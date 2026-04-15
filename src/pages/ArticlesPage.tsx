import { useEffect, useMemo, useState } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'
import { api } from '../lib/api'
import { SafeImage } from '../components/shared/SafeImage'
import type { Article } from '../types/api'

function getArticleFallbackImage(title: string) {
  const text = encodeURIComponent(title)
  return `https://placehold.co/800x600/0f172a/22d3ee?text=${text}`
}

export function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All Articles')
  const [articleCategories, setArticleCategories] = useState<string[]>(['All Articles'])
  const [articles, setArticles] = useState<Article[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchParams] = useSearchParams()

  useEffect(() => {
    async function loadData() {
      try {
        const [fetchedArticles, fetchedCategories] = await Promise.all([api.getArticles(), api.getArticleCategories()])
        setArticles(fetchedArticles)
        setArticleCategories(fetchedCategories)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unable to load articles.')
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [])

  useEffect(() => {
    const categoryParam = searchParams.get('category')
    const matchingCategory = articleCategories.find((category) => category === categoryParam)
    if (matchingCategory) {
      setActiveCategory(matchingCategory)
    }
  }, [articleCategories, searchParams])

  const filteredArticles = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()
    return articles.filter((article) => {
      const matchesCategory = activeCategory === 'All Articles' || article.category === activeCategory
      const matchesQuery =
        query.length === 0 ||
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.author.toLowerCase().includes(query)
      return matchesCategory && matchesQuery
    })
  }, [activeCategory, articles, searchQuery])

  return (
    <main className="page-shell">
      <section className="relative overflow-hidden pb-16 pt-36">
        <div className="absolute inset-0">
          <SafeImage
            src="https://readdy.ai/api/search-image?query=abstract%20digital%20library%20visualization%20with%20floating%20holographic%20book%20pages%20glowing%20data%20streams%20interconnected%20knowledge%20nodes%20luminous%20text%20particles%20flowing%20through%20dark%20space%20with%20cyan%20teal%20and%20electric%20blue%20accents%20futuristic%20information%20architecture%20with%20depth%20layers%20volumetric%20lighting%20cinematic%20composition&width=1920&height=600&seq=articles-hero-001&orientation=landscape"
            alt="Articles background"
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/45 to-black/65" />
        </div>
        <div className="content-container relative z-10">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/10 px-4 py-2 text-white backdrop-blur-md">
              <span className="text-sm font-medium">Knowledge Hub</span>
            </div>
            <h1 className="mb-5 text-5xl font-extrabold leading-tight text-white">Explore Our Articles</h1>
            <p className="text-xl leading-relaxed text-white/90">
              Dive into our collection of in-depth articles on cutting-edge technology topics from industry experts.
            </p>
          </div>
        </div>
      </section>

      <section className="content-container py-10">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search articles..."
              className="w-full rounded-lg border border-cyan-500/20 bg-slate-900/70 px-4 py-3 pl-11 text-sm text-slate-100 transition-all duration-300 placeholder:text-slate-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-500">🔎</span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            {articleCategories.map((category) => {
              const isActive = category === activeCategory
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'scale-105 bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg shadow-cyan-500/30'
                      : 'border border-cyan-500/20 bg-slate-900/70 text-slate-300 hover:scale-105 hover:border-cyan-400/40 hover:bg-slate-800'
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </div>
        </div>

        {isLoading ? (
          <div className="surface-card rounded-xl px-6 py-10 text-center">
            <p className="text-sm text-slate-300">Loading articles...</p>
          </div>
        ) : error ? (
          <div className="surface-card rounded-xl px-6 py-10 text-center">
            <h2 className="mb-2 text-xl font-semibold text-slate-100">Unable to load articles</h2>
            <p className="text-sm text-red-300">{error}</p>
          </div>
        ) : filteredArticles.length === 0 ? (
          <div className="surface-card rounded-xl px-6 py-10 text-center">
            <h2 className="mb-2 text-xl font-semibold text-slate-100">No articles found</h2>
            <p className="text-sm text-slate-400">Try a different search term or select another category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <NavLink
                key={article.id}
                to={`/article/${article.id}`}
                className="surface-card surface-card-hover group block overflow-hidden rounded-xl"
              >
                <div className="h-48 w-full overflow-hidden">
                  <SafeImage
                    src={article.image}
                    fallbackSrc={getArticleFallbackImage(article.title)}
                    alt={article.title}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded-full border border-cyan-500/35 bg-cyan-500/15 px-3 py-1 text-xs font-medium text-cyan-200">
                      {article.category}
                    </span>
                    <span className="text-xs text-slate-400">{article.readTime}</span>
                  </div>
                  <h2 className="mb-2 text-lg font-semibold text-slate-100 transition-colors group-hover:text-cyan-200">
                    {article.title}
                  </h2>
                  <p className="mb-4 text-sm text-slate-300">{article.excerpt}</p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-xs font-bold text-white shadow-lg shadow-cyan-500/30">
                      {article.authorTag}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-100">{article.author}</p>
                      <p className="text-xs text-slate-400">{article.date}</p>
                    </div>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
