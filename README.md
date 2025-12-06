# React + Vite Blueprint

A minimal, production-ready template for React applications with TypeScript, Vite, Radix Colors, and Docker support.

## Features

- **React 18** - Latest React with modern hooks and features
- **TypeScript** - Full type safety with strict configuration
- **Vite** - Lightning-fast dev server and optimized builds
- **React Router** - Client-side routing ready to use
- **Radix Colors** - Professional color system with automatic dark/light mode (all 30 colors)
- **ESLint** - Best-practice linting rules for React, TypeScript, and accessibility
- **Docker** - Multi-stage build for optimized production deployment
- **CSS Variables** - Comprehensive design token system for consistent styling

## Quick Start

### Setup

```bash
# Install dependencies
npm install

# Copy environment variables (optional)
cp .env.example .env.local
# Edit .env.local with your values
```

### Development

```bash
# Start dev server (http://localhost:5173)
npm run dev
```

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Linting

```bash
# Run ESLint
npm run lint

# Auto-fix issues
npm run lint:fix
```

### Docker

```bash
# Build Docker image
docker build -t react-vite-app .

# Run container
docker run -p 80:80 react-vite-app
```

## Project Structure

```
react-vite-blueprint/
├── public/                      # Static assets
├── src/
│   ├── components/
│   │   ├── Navigation.tsx      # Navigation component with routing
│   │   └── Navigation.css      # Navigation styles
│   ├── pages/
│   │   ├── Home.tsx            # Home page
│   │   ├── About.tsx           # About page (example)
│   │   └── NotFound.tsx        # 404 page
│   ├── styles/
│   │   ├── radix-colors.css    # Radix Colors imports (all 30 colors)
│   │   ├── variables.css       # Custom design tokens
│   │   ├── reset.css           # CSS reset
│   │   └── global.css          # Global styles and theme setup
│   ├── App.tsx                 # Router configuration
│   ├── config.ts               # Environment variables configuration
│   ├── main.tsx                # React entry point
│   └── vite-env.d.ts           # Vite type definitions
├── .env.example                 # Environment variables template
├── Dockerfile                   # Multi-stage Docker build
├── nginx.conf                   # Nginx configuration for SPA
├── eslint.config.js            # ESLint configuration
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

## Styling System

### Radix Colors

This template uses [Radix Colors](https://www.radix-ui.com/colors) for all color variables. Radix Colors provides:

- Semantic color scales (1-12 steps per color)
- Automatic light/dark mode support
- Professionally designed, accessible colors
- CSS variables: `--gray-1` through `--gray-12`, `--blue-1` through `--blue-12`, etc.

**Example usage:**

```css
.my-component {
  background-color: var(--gray-1);    /* App background */
  color: var(--gray-12);              /* High contrast text */
  border: 1px solid var(--gray-6);   /* Subtle border */
}
```

### Custom Design Tokens

Custom variables are defined in `src/styles/variables.css`:

- **Typography**: Two size scales (UI and Landing Page)
  - UI sizes: `--h1-ui`, `--p-ui`, etc. (compact for UI)
  - Landing sizes: `--h1`, `--p`, etc. (larger for marketing)
- **Spacing**: `--space-1` through `--space-8` (4px base unit)
- **Margins**: `--margin-xxs` through `--margin-xxl`
- **Border Radius**: `--radius-1` through `--radius-4`, `--radius-round`
- **Shadows**: `--shadow-1` through `--shadow-4`
- **Z-Index**: Semantic z-index scale
- **Transitions**: Timing presets for animations

### Dark/Light Mode

**Current Setup: Automatic Theme Switching**

Dark mode is handled automatically via `prefers-color-scheme`. Radix Colors includes both light and dark color variants, and the browser automatically uses the correct set based on the user's system preference.

No additional code or classes needed - it just works!

**To add manual theme switching later:**

The architecture is prepared for manual override. Follow these steps (detailed in `src/styles/global.css`):

1. Add CSS rules for `.light` and `.dark` classes with `color-scheme` property
2. Create a `useTheme` hook:
   - Read system preference with `window.matchMedia('(prefers-color-scheme: dark)')`
   - Allow manual override: `'light' | 'dark' | 'system'`
   - Set `class="light"` or `class="dark"` on `<html>` element
   - Persist choice in `localStorage`
3. Add a theme toggle button in your UI

Radix Colors will automatically respond to the class changes!

## Routing with React Router

React Router is configured and ready to use. The setup follows best practices for client-side routing.

### Adding New Routes

**1. Create a new page in `src/pages/`:**

```tsx
// src/pages/Contact.tsx
function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Your contact page content here.</p>
    </div>
  )
}

export default Contact
```

**2. Add the route in `src/App.tsx`:**

```tsx
import Contact from './pages/Contact'

// Inside <Routes>:
<Route path="/contact" element={<Contact />} />
```

**3. Add navigation link in `src/components/Navigation.tsx`:**

```tsx
<NavLink to="/contact">Contact</NavLink>
```

### Available Router Hooks

React Router provides useful hooks you can use in your pages:

- `useNavigate()` - Programmatic navigation
- `useParams()` - Access URL parameters
- `useLocation()` - Current location object
- `useSearchParams()` - Query string parameters

**Example with URL parameters:**

```tsx
// In App.tsx
<Route path="/user/:id" element={<UserProfile />} />

// In UserProfile.tsx
import { useParams } from 'react-router-dom'

function UserProfile() {
  const { id } = useParams()
  return <div>User ID: {id}</div>
}
```

### Navigation Component

The `Navigation` component uses `NavLink` which automatically adds an `active` class to the current route. This is styled in `Navigation.css` to highlight the active page.

## Environment Variables

Environment variables are managed using Vite's built-in `.env` file support.

### Setup

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` with your values

### Important Rules

- **Client-side variables** must be prefixed with `VITE_` to be exposed to your code
- `.env.local` is gitignored and safe for secrets during development
- Never commit `.env` or `.env.local` files with sensitive data
- For production, set environment variables in your hosting platform

### Usage

**Access in code via `src/config.ts`:**

```tsx
import { config } from './config'

function MyComponent() {
  console.log(config.appTitle)
  console.log(config.apiUrl)
  return <h1>{config.appTitle}</h1>
}
```

**Or directly:**

```tsx
const apiUrl = import.meta.env.VITE_API_URL
const isDev = import.meta.env.DEV
```

### Available Variables

See `.env.example` for all available environment variables with descriptions.

### Environment Files Priority

Vite loads `.env` files in this order (later files override earlier ones):

1. `.env` - Defaults for all environments
2. `.env.local` - Local overrides (gitignored)
3. `.env.[mode]` - Mode-specific (e.g., `.env.production`)
4. `.env.[mode].local` - Mode-specific local overrides

## TypeScript Configuration

This template uses strict TypeScript settings:

- `strict: true` - All strict type-checking options enabled
- `noUnusedLocals: true` - Error on unused local variables
- `noUnusedParameters: true` - Error on unused function parameters
- `noFallthroughCasesInSwitch: true` - Error on switch fallthrough
- `noUncheckedIndexedAccess: true` - Safer array/object access

## ESLint Configuration

Configured with best-practice rules for:

- **TypeScript** - Strict type checking
- **React Hooks** - Hook usage validation
- **React Refresh** - Fast refresh compatibility
- **Accessibility (jsx-a11y)** - WCAG compliance checking

## Docker Deployment

The included Docker setup uses a multi-stage build:

1. **Build stage**: Installs dependencies and builds the app
2. **Production stage**: Serves built files with Nginx

Benefits:

- Optimized image size (~20-30 MB)
- Production-ready Nginx configuration
- SPA routing support (all routes fallback to index.html)
- Gzip compression enabled
- Security headers configured
- Health check endpoint at `/health`

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ features
- CSS Custom Properties required

## License

This is a template project - use it however you want.

## Next Steps

1. Remove this README and customize for your project
2. Update `package.json` with your project details
3. Add routing (e.g., React Router) if needed
4. Add state management (e.g., Zustand, Redux) if needed
5. Integrate Radix UI components as needed
6. Build your application!

For questions about Claude Code, see [CLAUDE.md](./CLAUDE.md).
