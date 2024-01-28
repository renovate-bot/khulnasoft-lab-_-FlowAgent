import { HTMLAttributes, ReactNode } from "react"
import { BoxProps } from "@flowagent-design/theme"

export type ResultStatus =
  | "success"
  | "error"
  | "info"
  | "warning"
  | "404"
  | "403"
  | "500"

export interface ResultProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title">,
    BoxProps {
  extra?: ReactNode
  icon?: ReactNode
  paddingVertical?: string
  status?: ResultStatus
  subTitle?: ReactNode
  title?: ReactNode
}