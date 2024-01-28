import { ERROR_FLAG, isFLOWAGENTAPiError } from "@flowagent-public/flowagent-net"
import { getFLOWAGENTCloudURL, isCloudVersion } from "@flowagent-public/utils"
import { matchPath } from "react-router-dom"

export const commonBillingErrorHandler = (error: unknown) => {
  if (isFLOWAGENTAPiError(error) && isCloudVersion) {
    switch (error.data.errorFlag) {
      case ERROR_FLAG.ERROR_FLAG_ACCESS_DENIED:
        break
      case ERROR_FLAG.ERROR_FLAG_CAN_NOT_TEST_RESOURCE_CONNECTION:
        const match = matchPath("/:teamIdentifier/*", location.pathname)
        const teamIdentifier = match?.params?.teamIdentifier
        window.location.href = teamIdentifier
          ? `${getFLOWAGENTCloudURL()}/workspace/${teamIdentifier}`
          : getFLOWAGENTCloudURL()
        break
    }
  }
}
