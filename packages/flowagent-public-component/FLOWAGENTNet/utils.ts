import { isIllaErrorInterface } from "@flowagent-public/utils"
import { AxiosResponse } from "axios"
import { IFLOWAGENTApiError } from "./interface"

export const isIFLOWAGENTAPiError = (
  error: unknown,
): error is AxiosResponse<IFLOWAGENTApiError> => {
  return (
    typeof error === "object" &&
    error !== null &&
    "data" in error &&
    isIllaErrorInterface(error.data)
  )
}
