import {
  getFLOWAGENTBuilderURL,
  getFLOWAGENTCloudURL,
  removeAuthToken,
} from "@flowagent-public/utils"
import { AxiosError } from "axios"

export const errorHandlerInterceptor = (error: AxiosError) => {
  const { response } = error
  if (!response) return Promise.reject(error)
  const { status } = response
  switch (status) {
    case 401: {
      removeAuthToken()
      window.location.href = `${getFLOWAGENTCloudURL()}?redirectURL=${encodeURIComponent(
        location.origin + location.pathname,
      )}`
      break
    }
    case 403: {
      window.location.href = `${getFLOWAGENTBuilderURL()}/403`
      break
    }
    case 500: {
      window.location.href = `${getFLOWAGENTBuilderURL()}/500`
      break
    }
    default: {
      if (status >= 500) {
        window.location.href = `${getFLOWAGENTBuilderURL()}/500`
        break
      }
      break
    }
  }
  return Promise.reject(error)
}
