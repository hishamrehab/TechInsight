# TechInsight Hub

TechInsight Hub is a full-stack technology content platform where users can explore curated articles by category, read detailed insights, and securely access protected pages through JWT-based authentication.

## Why this project

TechInsight Hub is designed as a modern, portfolio-ready learning and publishing platform focused on emerging technology domains such as AI, Blockchain, Quantum, IoT, Cybersecurity, and AR/VR.

## Features

- Category-first browsing experience with rich category detail pages
- Articles listing and single article detail views
- Search-friendly content organization by topic
- Authentication flow with register, login, and protected routes
- Token-based backend auth using JSON Web Tokens (JWT)
- Responsive UI built with React, Tailwind CSS, and SCSS enhancements

## Tech Stack

- Frontend: React, TypeScript, Vite, React Router
- Styling: Tailwind CSS, SCSS
- Backend: Node.js, Express
- Auth/Security: bcryptjs, jsonwebtoken
- Tooling: ESLint, concurrently

## Project Structure

```text
techInsight/
  src/                # React app (pages, components, auth, API client)
  server/             # Express API and in-memory content/auth logic
  package.json        # Scripts and dependencies
```

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run frontend + backend together

```bash
npm run dev
```

This starts:
- Vite client (default `http://localhost:5173`)
- Express API server (default `http://localhost:4000`)

### 3) Build for production

```bash
npm run build
```

### 4) Preview production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - start client and server concurrently
- `npm run dev:client` - start Vite frontend only
- `npm run dev:server` - start Express backend with watch mode
- `npm run start:server` - start Express backend
- `npm run build` - type-check and build frontend
- `npm run lint` - run ESLint checks
- `npm run preview` - preview production frontend build

## API Overview

Base URL (frontend proxy usage): `/api`

- `GET /api/health`
- `GET /api/articles/categories`
- `GET /api/articles`
- `GET /api/articles/:id`
- `GET /api/categories`
- `GET /api/categories/:slug`
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me` (requires `Authorization: Bearer <token>`)

## Authentication Notes

- Passwords are hashed with `bcryptjs`
- Auth tokens are signed with JWT
- Default JWT secret fallback is configured for development
- For production, set `JWT_SECRET` in your environment

## Roadmap Ideas

- Persistent database integration (PostgreSQL or MongoDB)
- User profile and bookmark support
- Admin dashboard for content management
- Category filters and search refinements
- Unit and integration tests (frontend and backend)

## License

This project is open for educational and portfolio use. Add a formal license (for example, MIT) before public distribution if needed.
