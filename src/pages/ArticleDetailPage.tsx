import { useEffect, useState } from 'react'
import { NavLink, Navigate, useParams } from 'react-router-dom'
import { SafeImage } from '../components/shared/SafeImage'
import { api } from '../lib/api'
import type { Article } from '../types/api'

function getArticleFallbackImage(title: string) {
  const text = encodeURIComponent(title)
  return `https://placehold.co/800x600/0f172a/22d3ee?text=${text}`
}

export function ArticleDetailPage() {
  const { id } = useParams()
  const articleId = Number(id)
  const [article, setArticle] = useState<Article | null>(null)
  const [allArticles, setAllArticles] = useState<Article[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!Number.isFinite(articleId)) {
      setIsLoading(false)
      return
    }

    async function loadData() {
      try {
        const [fetchedArticle, fetchedArticles] = await Promise.all([api.getArticleById(articleId), api.getArticles()])
        setArticle(fetchedArticle)
        setAllArticles(fetchedArticles)
      } catch {
        setArticle(null)
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [articleId])

  if (!Number.isFinite(articleId)) {
    return <Navigate to="/not-found" replace />
  }

  if (isLoading) {
    return (
      <main className="page-shell pt-36">
        <div className="content-container text-slate-300">Loading article...</div>
      </main>
    )
  }

  if (!article) {
    return <Navigate to="/not-found" replace />
  }

  const relatedArticles = allArticles.filter((entry) => entry.id !== article.id).slice(0, 3)

  return (
    <main className="page-shell">
      <section className="relative pt-20">
        <div className="absolute inset-0 z-0 h-[500px]">
          <SafeImage
            alt={article.title}
            className="h-full w-full object-cover object-top"
            src={article.image}
            fallbackSrc={getArticleFallbackImage(article.title)}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 pb-32 pt-12">
          <NavLink
            to="/articles"
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
          >
            <i className="ri-arrow-left-line" />
            Back to Articles
          </NavLink>

          <div className="mb-5 flex items-center gap-3">
            <span className="rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-1.5 text-xs font-semibold text-white shadow-lg shadow-cyan-500/30">
              {article.category}
            </span>
            <span className="text-sm text-white/70">{article.readTime}</span>
          </div>

          <h1 className="mb-8 text-5xl font-extrabold leading-tight text-white">{article.title}</h1>

          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-lg font-bold text-white shadow-xl shadow-cyan-500/30">
              {article.authorTag}
            </div>
            <div>
              <p className="text-lg font-semibold text-white">{article.author}</p>
              <p className="text-white/70">{article.date}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="surface-card rounded-2xl p-10">
            <div className="prose prose-lg max-w-none">
              <p className="mb-8 text-lg leading-relaxed text-slate-200 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-5xl first-letter:font-bold first-letter:text-cyan-300">
                {article.excerpt}
              </p>

              {article.sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="mb-4 mt-10 flex items-center gap-3 text-2xl font-bold text-slate-100">
                    <span className="h-8 w-1 rounded-full bg-gradient-to-b from-cyan-500 to-teal-500" />
                    {section.heading}
                  </h2>
                  <p className="mb-6 leading-relaxed text-slate-300">{section.paragraph}</p>
                </div>
              ))}

              <div className="my-10 rounded-xl border-l-4 border-cyan-400 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6">
                <p className="mb-3 text-lg italic text-slate-200">"{article.quote}"</p>
                <p className="text-sm font-medium text-cyan-300">- {article.author}</p>
              </div>
            </div>

            <div className="mt-10 border-t border-cyan-500/20 pt-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="mr-2 text-sm font-medium text-slate-400">Tags:</span>
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="cursor-pointer rounded-full border border-cyan-500/30 bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:bg-cyan-500/10 hover:text-cyan-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-transparent py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h2 className="mb-2 text-3xl font-bold text-slate-100">Related Articles</h2>
              <p className="text-slate-400">Continue exploring {article.category} topics</p>
            </div>
            <NavLink
              to="/articles"
              className="hidden items-center gap-2 whitespace-nowrap rounded-lg border border-cyan-500/25 bg-slate-900/70 px-5 py-2.5 text-sm font-medium text-slate-200 transition-all hover:border-cyan-500 hover:text-cyan-200 md:inline-flex"
            >
              View All <i className="ri-arrow-right-line" />
            </NavLink>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {relatedArticles.map((relatedArticle) => (
              <NavLink
                key={relatedArticle.id}
                to={`/article/${relatedArticle.id}`}
                className="surface-card surface-card-hover group overflow-hidden rounded-xl"
              >
                <div className="h-48 w-full overflow-hidden">
                  <SafeImage
                    alt={relatedArticle.title}
                    className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    src={relatedArticle.image}
                    fallbackSrc={getArticleFallbackImage(relatedArticle.title)}
                  />
                </div>
                <div className="p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded-full border border-cyan-500/35 bg-cyan-500/15 px-3 py-1 text-xs font-medium text-cyan-200">
                      {relatedArticle.category}
                    </span>
                    <span className="text-xs text-slate-400">{relatedArticle.readTime}</span>
                  </div>
                  <h3 className="mb-2 line-clamp-2 font-semibold text-slate-100 transition-colors group-hover:text-cyan-200">
                    {relatedArticle.title}
                  </h3>
                  <p className="line-clamp-2 text-sm text-slate-400">{relatedArticle.excerpt}</p>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
