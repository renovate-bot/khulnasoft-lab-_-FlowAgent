export interface BuilderInfo {
  version: string
  language: string
}

export const BuilderInfoInitialState: BuilderInfo = {
  version: import.meta.env.FLOWAGENT_APP_VERSION,
  language: "English",
}
