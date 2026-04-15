# TechInsight

TechInsight is a frontend-only technology content platform built with React, TypeScript, and Vite. It provides curated articles, category-driven browsing, and a polished multi-page experience with client-side auth for demo flows.

## Highlights

- Modern landing experience with reusable layout and shared styling
- Articles page with search and category filters
- Category and article detail pages with related content
- Generation page for curated learning tracks and onboarding CTA
- Get Started onboarding flow with multi-step interest selection
- Client-side authentication context and protected route support
- Responsive UI using Tailwind utility classes and shared SCSS styles

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS
- SCSS
- ESLint

## Routes

- `/` - Home
- `/articles` - Articles listing
- `/article/:id` - Article details
- `/categories` - Category listing
- `/categories/:slug` - Category details
- `/about` - About page
- `/generation` - Generation page
- `/get-started` - Onboarding page

## Project Structure

```text
techInsight/
  public/             # Static assets (favicon, shared icons)
  src/
    assets/           # Frontend static assets
    auth/             # Auth context and protected route
    components/       # Shared UI and feature sections
    data/             # Local mock content datasets
    layouts/          # App layouts
    lib/              # Frontend API facade over local data
    pages/            # Route pages
    styles/           # Global SCSS styles
```

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run development server

```bash
npm run dev
```

Default local URL: `http://localhost:5173`

### 3) Build for production

```bash
npm run build
```

### 4) Preview production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Run type-check and production build
- `npm run lint` - Run ESLint
- `npm run preview` - Preview the production build

## Authentication Note

Authentication is demo-only and handled in the browser (local storage/session state). No backend service or external database is required.

## License

This project is currently intended for learning and portfolio usage. Add a formal license (for example, MIT) before public distribution.
