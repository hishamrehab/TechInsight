import express from 'express'
import cors from 'cors'
import bcrypt from 'bcryptjs'
import { articles, articleCategories, categories } from './content.js'
import { authMiddleware, createToken } from './auth.js'

const app = express()
const PORT = Number(process.env.PORT ?? 4000)

app.use(cors())
app.use(express.json())

const users = []

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.get('/api/articles/categories', (_req, res) => {
  res.json(articleCategories)
})

app.get('/api/articles', (_req, res) => {
  res.json(articles)
})

app.get('/api/articles/:id', (req, res) => {
  const articleId = Number(req.params.id)
  const article = articles.find((entry) => entry.id === articleId)
  if (!article) {
    return res.status(404).json({ message: 'Article not found.' })
  }
  return res.json(article)
})

app.get('/api/categories', (_req, res) => {
  res.json(categories)
})

app.get('/api/categories/:slug', (req, res) => {
  const category = categories.find((entry) => entry.slug === req.params.slug)
  if (!category) {
    return res.status(404).json({ message: 'Category not found.' })
  }
  return res.json(category)
})

app.post('/api/auth/register', async (req, res) => {
  const { name, email, password } = req.body ?? {}
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Name, email, and password are required.' })
  }

  const exists = users.find((entry) => entry.email === String(email).toLowerCase())
  if (exists) {
    return res.status(409).json({ message: 'User with this email already exists.' })
  }

  const passwordHash = await bcrypt.hash(password, 10)
  const user = { id: users.length + 1, name, email: String(email).toLowerCase(), passwordHash }
  users.push(user)

  const token = createToken(user)
  return res.status(201).json({ token, user: { id: user.id, name: user.name, email: user.email } })
})

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body ?? {}
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' })
  }

  const user = users.find((entry) => entry.email === String(email).toLowerCase())
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials.' })
  }

  const isValid = await bcrypt.compare(password, user.passwordHash)
  if (!isValid) {
    return res.status(401).json({ message: 'Invalid credentials.' })
  }

  const token = createToken(user)
  return res.json({ token, user: { id: user.id, name: user.name, email: user.email } })
})

app.get('/api/auth/me', authMiddleware, (req, res) => {
  const user = users.find((entry) => entry.id === req.user.sub)
  if (!user) {
    return res.status(404).json({ message: 'User not found.' })
  }

  return res.json({ id: user.id, name: user.name, email: user.email })
})

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`)
})
