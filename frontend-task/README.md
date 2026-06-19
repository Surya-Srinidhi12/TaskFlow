# TaskFlow Responsive Landing Page

TaskFlow is a premium, high-performance responsive landing page for a modern SaaS product. This application was built to fulfill a frontend developer assessment, highlighting layout implementation, responsive design, JavaScript functionality, accessibility, performance optimization, and clean Git history.

## Project Structure
```
frontend-task/
├── index.html
├── css/
│   ├── style.css          # Core design system & layout styling
│   ├── responsive.css     # Media queries for tablet & mobile views
│   ├── style.min.css      # Minified core styles for production
│   └── responsive.min.css # Minified responsive styles for production
├── js/
│   ├── app.js             # Navigation, form validation, dark mode & API code
│   └── app.min.js         # Minified application script for production
├── images/
│   ├── logo.svg           # Scalable vector graphics for the brand logo
│   └── hero-illustration.webp # Optimized hero section graphic
├── package.json           # Node configuration for minification tasks
├── minify.js              # Script to build production assets (CSS/JS minifier)
├── README.md
└── .gitignore
```

## Features

1. **Modern Layout Implementation**:
   - **Hero Section**: Sticky navigation, logo, engaging heading/sub-heading, vibrant call-to-action button, and high-quality illustration.
   - **Features Grid**: A 6-card grid with custom icons and interactive visual states.
   - **Pricing Section**: Interactive Tiered pricing cards (Starter, Professional, Enterprise) highlighting the recommended tier with interactive glowing details.
   - **Contact Form**: Interactive contact form with visual focused glow and inline error/success messaging.

2. **Full Responsiveness**:
   - **Mobile (<768px)**: Adaptive navigation via hamburger menu, single-column content structures.
   - **Tablet (768px - 1024px)**: Adaptive multi-column grid layouts (2-column grids).
   - **Desktop (>1024px)**: Optimized widescreen layouts (3-column grids, side-by-side splits).

3. **JavaScript Functionality**:
   - Mobile Hamburger Menu toggle.
   - Client-side Contact Form Validation (email pattern matching, required input checks, accessibility alerts).
   - LocalStorage-backed Dark/Light Mode toggle, modifying CSS root variables instantly.
   - **Bonus Challenge**: Integration with JSONPlaceholder API to fetch and render the latest 6 blog posts with skeleton loading indicators and dynamic error state recovery.

4. **Accessibility (A11y)**:
   - Built with semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
   - Accessible keyboard-focused navigation with custom focus indicators (`:focus-visible`).
   - Explicit `aria-` labels for interactive widgets (collapsible menus, toggles).
   - High contrast themes exceeding WCAG AA criteria.

5. **Performance & Optimizations**:
   - Auto-compiled minified CSS and JS modules to minimize network requests.
   - Native lazy loading (`loading="lazy"`) and optimized WebP graphics.
   - Efficient DOM updates utilizing batching and event delegation where applicable.

## Setup and Running

1. Open `frontend-task/index.html` directly in any web browser to view the application.
2. To regenerate minified files:
   ```bash
   cd frontend-task
   npm install
   npm run minify
   ```
