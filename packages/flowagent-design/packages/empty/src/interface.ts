import { ReactNode, HTMLAttributes } from "react"
import { BoxProps } from "@flowagent-design/theme"

export interface EmptyProps extends HTMLAttributes<HTMLDivElement>, BoxProps {
  description?: ReactNode
  divideSize?: string
  paddingVertical?: string
  icon?: ReactNode
  imgSrc?: string
}
