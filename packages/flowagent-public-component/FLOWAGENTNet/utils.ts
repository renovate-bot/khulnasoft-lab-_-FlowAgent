import { isIllaErrorInterface } from "@flowagent-public/utils"
import { AxiosResponse } from "axios"
import { FLOWAGENTApiError } from "./interface"

export const isFLOWAGENTAPiError = (
  error: unknown,
): error is AxiosResponse<FLOWAGENTApiError> => {
  return (
    typeof error === "object" &&
    error !== null &&
    "data" in error &&
    isIllaErrorInterface(error.data)
  )
}
