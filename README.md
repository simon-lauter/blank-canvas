# Blank Canvas

A minimal React + Vite starter with TypeScript, Radix Themes, React Router and the React Compiler enabled.

## Stack

- **React 19** with the [React Compiler](https://react.dev/learn/react-compiler) enabled via Babel
- **TypeScript 6** in strict bundler mode
- **Vite 8** as dev server and build tool
- **React Router 7** for client-side routing
- **[@radix-ui/themes](https://www.radix-ui.com/themes)** as the UI system (teal accent, custom gray scale)
- **ESLint 9** (flat config) with React Hooks and React Refresh rules
- **Husky** pre-commit hook running `npm run lint`
- **Switzer** variable font, self-hosted from `src/assets/fonts/`

## Scripts

```bash
npm install      # install dependencies (also sets up husky)
npm run dev      # start dev server on http://localhost:5173
npm run build    # type-check and build to dist/
npm run preview  # preview the production build
npm run lint     # run ESLint with --fix
```

## Project Structure

```
blank-canvas/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── fonts/              # Switzer variable fonts (woff2)
│   ├── pages/
│   │   └── Home.tsx
│   ├── providers/
│   │   └── ThemeProvider.tsx   # light / dark / system theme context
│   ├── App.tsx                 # router setup
│   ├── main.tsx                # React entry, Radix Theme + ThemePanel
│   └── index.css               # font-face + custom Radix color tokens
├── .husky/pre-commit           # runs npm run lint
├── eslint.config.js
├── vite.config.ts              # react + react-compiler babel preset
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
└── package.json
```

## Theming

`src/main.tsx` wraps the app in a Radix `<Theme accentColor="teal" grayColor="gray">` and a `<ThemePanel>` for live tweaking. `src/index.css` overrides the `teal` and `gray` scales (light/dark, sRGB + P3) with a custom palette.

The `ThemeProvider` in `src/providers/ThemeProvider.tsx` toggles `"light" | "dark" | "system"` by adding the matching class to `<html>` and persisting the choice in `localStorage` under `vite-ui-theme`. Use it via the `useTheme()` hook:

```tsx
import { useTheme } from "./providers/ThemeProvider";

const { theme, setTheme } = useTheme();
setTheme("dark");
```

## Routing

Routes are declared in `src/App.tsx` via `createBrowserRouter`. Add a new page by dropping a component into `src/pages/` and registering it:

```tsx
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
]);
```

## React Compiler

The React Compiler runs through `@rolldown/plugin-babel` with `reactCompilerPreset()` (see `vite.config.ts`). No manual `useMemo` / `useCallback` is needed for memoization in most cases — write idiomatic React and let the compiler handle it.
