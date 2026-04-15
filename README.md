# TechInsight Hub

TechInsight Hub is a frontend-only technology content platform built with React, TypeScript, and Vite. It lets users explore curated articles by category, view detailed article pages, and use local browser-based authentication for demo access to protected routes.

## Features

- Rich homepage and category browsing experience
- Articles listing with search and category filtering
- Category detail pages with related content
- Article detail pages with tags, sections, and related posts
- Client-side authentication flow (register/login/logout)
- Protected route support using local session state
- Responsive UI with Tailwind CSS and SCSS

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS
- SCSS
- ESLint

## Project Structure

```text
techInsight/
  src/
    data/             # Local content datasets
    pages/            # Route pages
    components/       # Shared and home components
    auth/             # Auth context and protected route
    lib/              # Frontend API facade (local data service)
  package.json
```

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

App runs by default at `http://localhost:5173`.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - start Vite dev server
- `npm run build` - type-check and build the app
- `npm run lint` - run ESLint
- `npm run preview` - preview production build

## Authentication Note

Authentication is demo-only and runs entirely in the browser with local storage. No external backend or database is required.

## License

This project is open for educational and portfolio use. Add a formal license (for example, MIT) before public distribution if needed.
