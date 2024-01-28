interface ImportMetaEnv {
  readonly IFLOWAGENT_API_BASE_URL: string
  readonly IFLOWAGENT_MARKET_URL: string
  readonly IFLOWAGENT_INSTANCE_ID: string
  readonly IFLOWAGENT_SENTRY_ENV: string
  readonly IFLOWAGENT_SENTRY_SERVER_API: string
  readonly IFLOWAGENT_APP_VERSION: string
  readonly IFLOWAGENT_APP_ENV: string
  readonly IFLOWAGENT_GOOGLE_MAP_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
