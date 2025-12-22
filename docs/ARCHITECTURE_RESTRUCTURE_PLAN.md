# Technical Architecture Restructure Plan
**Goal:** Transition from SPA to Multi-Page Application (MPA) simulation using proper Routing for SEO.

## 1. System Components

### Current Architecture (SPA)
*   **Routing:** Hash-based or single route (`/`).
*   **Navigation:** Scroll-to-section (`#about`, `#contact`).
*   **Metadata:** Static global metadata in `index.html`.

### Target Architecture (SEO-First)
*   **Routing:** `react-router-dom` with `BrowserRouter`. Real URLs (`/services/ai-solutions`).
*   **Metadata:** Dynamic metadata per route using `react-helmet-async`.
*   **Sitemap:** Dynamic generation or comprehensive static `sitemap.xml` mapping all new routes.

## 2. New Route Structure

The following directory structure will be implemented in `src/pages`:

```
/ (Home)
├── services/
│   ├── ai-automation/         (New: AI Solutions)
│   ├── custom-software/       (New: SaaS/Enterprise Apps)
│   ├── mvp-development/       (New: Startup focus)
│   └── web-modernization/     (New: Performance/SEO focus)
├── about/                     (Expanded "About Me")
├── case-studies/              (Project deep-dives)
│   ├── [case-study-slug]/     (Individual project pages)
└── contact/                   (Dedicated contact page)
```

## 3. Technology Stack Updates

| Feature | Tool | Implementation |
| :--- | :--- | :--- |
| **Routing** | `react-router-dom` | Replace hash links with `<Link to="...">`. |
| **Metadata** | `react-helmet-async` | Inject unique `<title>` and `<meta description>` per page. |
| **Performance** | `React.lazy` | Code split every route to ensure `Home` doesn't load `AI Solutions` code. |
| **Analytics** | `Google Analytics 4` | Fix event tracking to capture "Virtual Pageviews" on route change. |

## 4. Implementation Steps

1.  **Install Dependencies:** `npm install react-router-dom react-helmet-async`
2.  **App Wrapper:** Wrap `App.jsx` with `<HelmetProvider>` and `<BrowserRouter>`.
3.  **Layout System:** Create a `MainLayout` component (Navbar + Footer) that wraps page content.
4.  **Route Definition:** Define routes in `App.jsx` pointing to new Page components.
5.  **Page creation:** Scaffold empty page components for the Services.
6.  **Navigation Update:** Update `Navbar` to use proper links.
7.  **Sitemap Update:** Generate a new `sitemap.xml` reflecting the new structure.

## 5. Directory Structure Constraints
*   **Do NOT** delete existing components yet. We will "lift" content from Sections (e.g., `About` section) into Pages (e.g., `AboutPage`).
*   **Shared Components:** Reusable UI (Buttons, Cards) remain in `/components`.
*   **Layouts:** New folder `/layouts` for `MainLayout.jsx`.
