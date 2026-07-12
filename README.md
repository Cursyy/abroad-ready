# Abroad Ready

> A work and travel programme guide built with Next.js and Strapi — browse, filter, and apply for international programmes across 18+ countries.

🌍 **Live site:** https://abroad-ready.vercel.app

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 14 (App Router), TypeScript, Tailwind CSS |
| CMS | Strapi v5 (Headless CMS, REST API) |
| Frontend Hosting | Vercel |
| Backend Hosting | Railway |

---

## Features

- Browse 20+ international work and travel programmes
- Filter by country — client-side, instant, no page reload
- Dynamic detail pages with full programme information
- Application form with Strapi backend integration
- Featured programmes highlighted on the homepage
- ISR (Incremental Static Regeneration) — fast loads, fresh content
- Per-page SEO metadata with `generateMetadata`
- Custom 404 handling for invalid programme slugs
- Fully responsive, mobile-first layout
- How it works page with step-by-step process guide

---

## Project Structure

```
abroad-ready/
├── frontend/                  ← Next.js 14 application
│   └── src/
│       ├── app/               ← App Router pages
│       │   ├── page.tsx               ← Homepage
│       │   ├── how-it-works/          ← How it works page
│       │   └── programmes/
│       │       ├── page.tsx           ← Listing page
│       │       └── [slug]/
│       │           ├── page.tsx       ← Detail page
│       │           └── apply/         ← Application form
│       ├── components/
│       │   ├── ui/            ← ProgrammeCard, CountryFilter
│       │   └── layout/        ← Navbar, Footer
│       ├── lib/               ← API layer (fetchStrapi, getProgrammes...)
│       └── types/             ← TypeScript interfaces
└── backend/                   ← Strapi v5 CMS
    └── src/
        └── api/
            ├── programme/     ← Programme content type
            └── application/   ← Application content type
```

---

## Architecture Decisions

**Centralised API layer** — all Strapi fetches go through a single generic `fetchStrapi<T>` function in `src/lib/api.ts`. One place for error handling, one place to update the base URL.

**Server components by default** — pages fetch data directly on the server using React Server Components. Zero client-side fetch logic, no loading spinners on the listing or detail pages.

**Client component isolation** — `CountryFilter` is the only client component on the programmes page. It receives the full programme array as props from the server and filters in memory with `useState` — no extra API calls on filter.

**ISR** — listing and detail pages revalidate every hour. Static speed with reasonably fresh content. `dynamicParams = true` on detail pages means new programmes added in Strapi are generated on first visit without a full redeploy.

---

## Running Locally

### Prerequisites

- Node.js 20+
- npm

### Backend (Strapi)

```bash
cd backend
npm install
npm run develop
```

Strapi admin available at `http://localhost:1337/admin`

### Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

Frontend available at `http://localhost:3000`

### Environment Variables

Create `frontend/.env.local`:

```bash
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

### Strapi Setup

1. Create admin account at `http://localhost:1337/admin`
2. Go to Settings → Users & Permissions → Roles → Public
3. Enable `find` and `findOne` on Programme
4. Enable `create` on Application
5. Add programme content via Content Manager

---

## Deployment

| Service | Purpose | Config |
|---|---|---|
| Vercel | Next.js frontend | Root directory: `frontend` |
| Railway | Strapi backend | Root directory: `backend` |

Environment variable required on Vercel:

```
NEXT_PUBLIC_STRAPI_URL=https://your-railway-url.up.railway.app
```