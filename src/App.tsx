import { Navigate, Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './auth/ProtectedRoute'
import { MainLayout } from './layouts/MainLayout'
import {
  AboutPage,
  ArticleDetailPage,
  ArticlesPage,
  CategoryDetailPage,
  CategoriesPage,
  GetStartedPage,
  HomePage,
  LoginPage,
  NotFoundPage,
  RegisterPage,
} from './pages'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="articles" element={<ArticlesPage />} />
        <Route path="article/:id" element={<ArticleDetailPage />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="categories/:slug" element={<CategoryDetailPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route
          path="get-started"
          element={
            <ProtectedRoute>
              <GetStartedPage />
            </ProtectedRoute>
          }
        />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
      <Route path="home" element={<Navigate to="/" replace />} />
      <Route path="not-found" element={<NotFoundPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
