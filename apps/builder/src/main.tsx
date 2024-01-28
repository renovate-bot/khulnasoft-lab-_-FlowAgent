import { FLOWAGENTMixpanel } from "@flowagent-public/mixpanel-utils"
import { initDateReport, initDayjs, isCloudVersion } from "@flowagent-public/utils"
import { LicenseInfo } from "@mui/x-data-grid-premium"
import * as Sentry from "@sentry/react"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import "@/api/http/base"
import "@/i18n/config"
import App from "./App"
import store from "./store"

if (
  import.meta.env.FLOWAGENT_APP_ENV &&
  import.meta.env.FLOWAGENT_APP_ENV !== "development" &&
  import.meta.env.FLOWAGENT_INSTANCE_ID === "CLOUD" &&
  import.meta.env.FLOWAGENT_SENTRY_SERVER_API
) {
  Sentry.init({
    dsn: import.meta.env.FLOWAGENT_SENTRY_SERVER_API,
    integrations: [new Sentry.BrowserTracing()],
    environment: import.meta.env.FLOWAGENT_APP_ENV,
    tracesSampleRate: 1.0,
    release: `flowagent@${import.meta.env.FLOWAGENT_APP_VERSION}`,
  })
}

if (isCloudVersion) {
  LicenseInfo.setLicenseKey(import.meta.env.FLOWAGENT_MUI_LICENSE)
}

initDateReport()
FLOWAGENTMixpanel.setDeviceID()
initDayjs()

const root = createRoot(document.getElementById("root")!!)

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
