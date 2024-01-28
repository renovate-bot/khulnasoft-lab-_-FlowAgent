export const IS_PRODUCTION = process.env.IFLOWAGENT_APP_ENV === "production"
export const IS_BETA = process.env.IFLOWAGENT_APP_ENV === "beta"
export const IS_TEST = process.env.IFLOWAGENT_APP_ENV === "test"
export const IS_DEV = process.env.IFLOWAGENT_APP_ENV === "development"
export const IS_LOCAL = IS_TEST || IS_DEV
export const IS_LIKE_PROD = IS_BETA || IS_PRODUCTION
