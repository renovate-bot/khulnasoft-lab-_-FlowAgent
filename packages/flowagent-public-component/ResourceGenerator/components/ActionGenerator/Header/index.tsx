import IconHotSpot from "@flowagent-public/icon-hot-spot"
import { FC } from "react"
import { CloseIcon } from "@flowagent-design/react"
import { ModalHeaderProps } from "./interface"
import { closeIconContainerStyle, containerStyle, headerStyle } from "./style"

export const ModalHeader: FC<ModalHeaderProps> = (props) => {
  const { title, onClickClose } = props
  return (
    <div css={containerStyle}>
      <h2 css={headerStyle}>{title}</h2>
      {onClickClose && (
        <IconHotSpot onClick={onClickClose} css={closeIconContainerStyle}>
          <CloseIcon />
        </IconHotSpot>
      )}
    </div>
  )
}
