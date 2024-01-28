import { COFLOWAGENTR_TYPE } from "../../interface"

export interface CollarDrawerShowProps {
  from: string
  visible?: boolean
  id: string
  onSuccessCallback?: (teamID: string, operationType: COFLOWAGENTR_TYPE) => void
}
