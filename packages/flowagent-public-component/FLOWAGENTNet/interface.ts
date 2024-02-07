import { ERROR_FLAG } from "./errorFlag"

export interface RequestHandlerOptions {
  teamIdentifier?: string
  teamID?: string
}

export interface FLOWAGENTApiError {
  errorCode: string | number
  errorFlag: ERROR_FLAG
  errorMessage: string
}
