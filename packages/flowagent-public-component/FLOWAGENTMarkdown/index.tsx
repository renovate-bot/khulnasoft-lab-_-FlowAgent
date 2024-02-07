import { FC } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Link, getColor } from "@flowagent-design/react"
import { FLOWAGENTMarkdownProps } from "./interface"
import { applyMarkdownPStyle } from "./style"

export const FLOWAGENTMarkdown: FC<FLOWAGENTMarkdownProps> = (props) => {
  const {
    textString,
    textColor = getColor("white", "01"),
    urlColor = getColor("white", "01"),
  } = props
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        a: ({ ...aProps }) => (
          <Link href={aProps.href} colorScheme={urlColor} target="_blank">
            {aProps.children}
          </Link>
        ),
        p: ({ children }) => (
          <span css={applyMarkdownPStyle(textColor)}>{children}</span>
        ),
      }}
    >
      {textString ?? ""}
    </ReactMarkdown>
  )
}

FLOWAGENTMarkdown.displayName = "FLOWAGENTMarkdown"
