import { APIKeyAddToType, APIKeyAddToValue } from "@flowagent-public/public-types"

export const APIKeyAddToSelect = [
  {
    label: APIKeyAddToType.HEADER,
    value: APIKeyAddToValue.HEADER,
  },
  {
    label: APIKeyAddToType.URLPARAMS,
    value: APIKeyAddToValue.URLPARAMS,
  },
]
