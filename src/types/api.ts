export type ArticleSection = {
  heading: string
  paragraph: string
}

export type Article = {
  id: number
  title: string
  excerpt: string
  category: string
  readTime: string
  author: string
  authorTag: string
  date: string
  image: string
  tags: string[]
  sections: ArticleSection[]
  quote: string
}

export type Category = {
  slug: string
  label: string
  icon: string
  description: string
  image: string
  articleCategory: string | null
}

export type AuthUser = {
  id: number
  name: string
  email: string
}
