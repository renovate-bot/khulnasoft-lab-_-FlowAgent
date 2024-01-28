interface ImportMetaEnv {
  readonly FLOWAGENT_API_BASE_URL: string
  readonly FLOWAGENT_MARKET_URL: string
  readonly FLOWAGENT_INSTANCE_ID: string
  readonly FLOWAGENT_SENTRY_ENV: string
  readonly FLOWAGENT_SENTRY_SERVER_API: string
  readonly FLOWAGENT_APP_VERSION: string
  readonly FLOWAGENT_APP_ENV: string
  readonly FLOWAGENT_GOOGLE_MAP_KEY: string
  readonly FLOWAGENT_BUILDER_URL: string
  readonly FLOWAGENT_CLOUD_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
