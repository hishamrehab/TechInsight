import type { Article, AuthUser, Category } from '../types/api'
import { articleCategories, articles, categories } from '../data/content'

type StoredUser = AuthUser & { password: string }

const USERS_KEY = 'techinsight_mock_users'
const SESSION_KEY = 'techinsight_mock_session'

function readUsers(): StoredUser[] {
  const raw = localStorage.getItem(USERS_KEY)
  if (!raw) return []
  try {
    return JSON.parse(raw) as StoredUser[]
  } catch {
    return []
  }
}

function saveUsers(users: StoredUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

function createSessionToken(userId: number) {
  const token = `local-session-${userId}-${Date.now()}`
  localStorage.setItem(SESSION_KEY, JSON.stringify({ token, userId }))
  return token
}

function readSessionUserId(token: string) {
  const raw = localStorage.getItem(SESSION_KEY)
  if (!raw) return null
  try {
    const session = JSON.parse(raw) as { token: string; userId: number }
    return session.token === token ? session.userId : null
  } catch {
    return null
  }
}

function delay<T>(value: T): Promise<T> {
  return Promise.resolve(value)
}

export const api = {
  getArticles: () => delay<Article[]>(articles),
  getArticleById: async (id: number) => {
    const article = articles.find((entry) => entry.id === id)
    if (!article) {
      throw new Error('Article not found.')
    }
    return delay<Article>(article)
  },
  getArticleCategories: () => delay<string[]>(articleCategories),
  getCategories: () => delay<Category[]>(categories),
  getCategoryBySlug: async (slug: string) => {
    const category = categories.find((entry) => entry.slug === slug)
    if (!category) {
      throw new Error('Category not found.')
    }
    return delay<Category>(category)
  },
  register: async (name: string, email: string, password: string) => {
    const normalizedEmail = email.trim().toLowerCase()
    const users = readUsers()
    const exists = users.some((entry) => entry.email === normalizedEmail)
    if (exists) {
      throw new Error('User with this email already exists.')
    }
    const user: StoredUser = { id: users.length + 1, name: name.trim(), email: normalizedEmail, password }
    users.push(user)
    saveUsers(users)
    const token = createSessionToken(user.id)
    return delay<{ token: string; user: AuthUser }>({
      token,
      user: { id: user.id, name: user.name, email: user.email },
    })
  },
  login: async (email: string, password: string) => {
    const normalizedEmail = email.trim().toLowerCase()
    const users = readUsers()
    const user = users.find((entry) => entry.email === normalizedEmail)
    if (!user || user.password !== password) {
      throw new Error('Invalid credentials.')
    }
    const token = createSessionToken(user.id)
    return delay<{ token: string; user: AuthUser }>({
      token,
      user: { id: user.id, name: user.name, email: user.email },
    })
  },
  getMe: async (token: string) => {
    const userId = readSessionUserId(token)
    if (!userId) {
      throw new Error('Invalid or expired token.')
    }
    const users = readUsers()
    const user = users.find((entry) => entry.id === userId)
    if (!user) {
      throw new Error('User not found.')
    }
    return delay<AuthUser>({ id: user.id, name: user.name, email: user.email })
  },
}
