import IconHotSpot from "@flowagent-public/icon-hot-spot"
import { FC } from "react"
import { MinimizeIcon, Modal, getColor } from "@flowagent-design/react"
import { UploadFileList } from "../DetailList"
import { IUpdateDetailModalProps } from "./interface"
import { buttonGroupContainerStyle, modalContainerStyle } from "./style"

export const ProcessDetailModal: FC<IUpdateDetailModalProps> = (props) => {
  const { open, changeOpen } = props

  return (
    <Modal
      title={null}
      visible={open}
      footer={false}
      closable={false}
      onCancel={() => {
        changeOpen(false)
      }}
    >
      <div css={modalContainerStyle}>
        <div css={buttonGroupContainerStyle}>
          <IconHotSpot
            inactiveColor={getColor("grayBlue", "02")}
            onClick={() => {
              changeOpen(false)
            }}
          >
            <MinimizeIcon />
          </IconHotSpot>
        </div>
        <UploadFileList />
      </div>
    </Modal>
  )
}
