import type { ReactNode } from 'react'
import { useEffect, useMemo, useState } from 'react'
import { api } from '../lib/api'
import type { AuthUser } from '../types/api'
import { AuthContext, type AuthContextType } from './AuthContextValue'

const TOKEN_KEY = 'techinsight_auth_token'

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [token, setToken] = useState<string | null>(() => localStorage.getItem(TOKEN_KEY))
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function restoreSession() {
      if (!token) {
        setIsLoading(false)
        return
      }

      try {
        const profile = await api.getMe(token)
        setUser(profile)
      } catch {
        localStorage.removeItem(TOKEN_KEY)
        setToken(null)
        setUser(null)
      } finally {
        setIsLoading(false)
      }
    }

    restoreSession()
  }, [token])

  const value = useMemo<AuthContextType>(
    () => ({
      user,
      token,
      isLoading,
      async login(email, password) {
        const result = await api.login(email, password)
        localStorage.setItem(TOKEN_KEY, result.token)
        setToken(result.token)
        setUser(result.user)
      },
      async register(name, email, password) {
        const result = await api.register(name, email, password)
        localStorage.setItem(TOKEN_KEY, result.token)
        setToken(result.token)
        setUser(result.user)
      },
      logout() {
        localStorage.removeItem(TOKEN_KEY)
        setToken(null)
        setUser(null)
      },
    }),
    [isLoading, token, user],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

