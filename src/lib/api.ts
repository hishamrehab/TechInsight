import type { Article, AuthUser, Category } from '../types/api'

const API_BASE = '/api'

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(init?.headers ?? {}) },
    ...init,
  })

  if (!response.ok) {
    let message = `Request failed (${response.status})`
    try {
      const payload = await response.json()
      if (payload?.message) {
        message = payload.message
      }
    } catch {
      // Ignore parse errors and return generic message.
    }
    throw new Error(message)
  }

  return response.json() as Promise<T>
}

export const api = {
  getArticles: () => request<Article[]>('/articles'),
  getArticleById: (id: number) => request<Article>(`/articles/${id}`),
  getArticleCategories: () => request<string[]>('/articles/categories'),
  getCategories: () => request<Category[]>('/categories'),
  getCategoryBySlug: (slug: string) => request<Category>(`/categories/${slug}`),
  register: (name: string, email: string, password: string) =>
    request<{ token: string; user: AuthUser }>('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    }),
  login: (email: string, password: string) =>
    request<{ token: string; user: AuthUser }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),
  getMe: (token: string) =>
    request<AuthUser>('/auth/me', {
      headers: { Authorization: `Bearer ${token}` },
    }),
}
