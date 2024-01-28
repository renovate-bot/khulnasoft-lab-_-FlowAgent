import {
  GoogleSheetAuthStatus,
  GoogleSheetResource,
} from "@flowagent-public/public-types"

export const GoogleSheetResourceInitial: GoogleSheetResource = {
  authentication: "serviceAccount",
  opts: {
    privateKey: "",
    status: GoogleSheetAuthStatus.Initial,
  },
}
