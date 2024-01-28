import { TriggerProps } from "@flowagent-design/trigger"

export interface PopoverProps extends Omit<TriggerProps, "withoutPadding"> {
  title?: string
  hasCloseIcon?: boolean
}
