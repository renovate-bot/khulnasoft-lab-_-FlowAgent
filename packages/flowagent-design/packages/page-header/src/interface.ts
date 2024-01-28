import { HTMLAttributes, MouseEvent, ReactNode } from "react"
import { BreadcrumbProps } from "@flowagent-design/breadcrumb"
import { BoxProps } from "@flowagent-design/theme"

export interface PageHeaderProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title">,
    BoxProps {
  title?: ReactNode
  subTitle?: ReactNode
  breadcrumb?: BreadcrumbProps
  backIcon?: ReactNode | boolean
  extra?: ReactNode
  onBack?: (e: MouseEvent) => void
}
