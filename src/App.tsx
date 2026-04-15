import { Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import {
  AboutPage,
  ArticleDetailPage,
  ArticlesPage,
  CategoryDetailPage,
  CategoriesPage,
  GetStartedPage,
  HomePage,
  NotFoundPage,
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
        <Route path="get-started" element={<GetStartedPage />} />
      </Route>
      <Route path="home" element={<Navigate to="/" replace />} />
      <Route path="not-found" element={<NotFoundPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
