/**
 * Application Configuration
 *
 * Access environment variables defined in .env files
 * Only variables prefixed with VITE_ are exposed to client code
 */

export const config = {
  appTitle: import.meta.env.VITE_APP_TITLE || 'React + Vite Blueprint',
  apiUrl: import.meta.env.VITE_API_URL || '',
  apiTimeout: Number(import.meta.env.VITE_API_TIMEOUT) || 30000,

  // Feature flags
  enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  enableDebugMode: import.meta.env.VITE_ENABLE_DEBUG_MODE === 'true',

  // Third-party service IDs
  googleAnalyticsId: import.meta.env.VITE_GOOGLE_ANALYTICS_ID || '',
  sentryDsn: import.meta.env.VITE_SENTRY_DSN || '',

  // Environment
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
  mode: import.meta.env.MODE,
} as const

// Type-safe environment variable access
declare global {
  interface ImportMetaEnv {
    readonly VITE_APP_TITLE?: string
    readonly VITE_API_URL?: string
    readonly VITE_API_TIMEOUT?: string
    readonly VITE_ENABLE_ANALYTICS?: string
    readonly VITE_ENABLE_DEBUG_MODE?: string
    readonly VITE_GOOGLE_ANALYTICS_ID?: string
    readonly VITE_SENTRY_DSN?: string
  }
}
