import { COFLOWAGENTR_TYPE } from "../../interface"

export interface CollarDrawerProps {
  from: string
  visible?: boolean
  onCancel?: () => void
  afterClose?: () => void
  onSuccessCallback?: (teamID: string, operationType: COFLOWAGENTR_TYPE) => void
}
