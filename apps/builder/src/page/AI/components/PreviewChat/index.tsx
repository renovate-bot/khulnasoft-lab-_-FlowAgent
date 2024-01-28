import {
  FLOWAGENT_MIXPANEL_EVENT_TYPE,
  MixpanelTrackContext,
} from "@flowagent-public/mixpanel-utils"
import { AI_AGENT_TYPE } from "@flowagent-public/public-types"
import { getCurrentUser } from "@flowagent-public/user-data"
import { AnimatePresence, motion } from "framer-motion"
import {
  FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { v4 } from "uuid"
import { Button, ContributeIcon, DependencyIcon } from "@flowagent-design/react"
import { FLOWAGENT_WEBSOCKET_STATUS } from "@/api/ws/interface"
import AgentBlockInput from "@/assets/agent/agent-block-input.svg?react"
import GridFillIcon from "@/assets/agent/gridFill.svg?react"
import StopIcon from "@/assets/agent/stop.svg?react"
import AIAgentMessage from "@/page/AI/components/AIAgentMessage"
import { GenerationMessage } from "@/page/AI/components/GenerationMessage"
import {
  ChatMessage,
  PreviewChatProps,
  SenderType,
} from "@/page/AI/components/PreviewChat/interface"
import {
  blockInputContainerStyle,
  blockInputTextStyle,
  chatContainerStyle,
  generatingContainerStyle,
  generatingContentContainerStyle,
  generatingDividerStyle,
  generatingTextStyle,
  inputStyle,
  inputTextContainerStyle,
  mobileInputElementStyle,
  mobileInputStyle,
  previewChatContainerStyle,
  previewTitleContainerStyle,
  previewTitleTextStyle,
  stopIconStyle,
} from "@/page/AI/components/PreviewChat/style"
import UserMessage from "@/page/AI/components/UserMessage"
import { getAgentWSStatus } from "@/redux/config/configSelector"

export const PreviewChat: FC<PreviewChatProps> = (props) => {
  const {
    showShareDialog,
    showContributeDialog,
    hasCreated,
    isMobile,
    isRunning,
    agentType,
    chatMessages,
    generationMessage,
    onSendMessage,
    isReceiving,
    blockInput,
    editState,
    onCancelReceiving,
    onShowShareDialog,
    onShowContributeDialog,
    onClickCreateApp,
  } = props

  const currentUserInfo = useSelector(getCurrentUser)

  const wsStatus = useSelector(getAgentWSStatus)

  const chatRef = useRef<HTMLDivElement>(null)

  const [textAreaVal, setTextAreaVal] = useState("")

  const { t } = useTranslation()

  const { track } = useContext(MixpanelTrackContext)

  const messagesList = useMemo(() => {
    return chatMessages.map((message) => {
      if (
        message.sender.senderType === SenderType.USER &&
        message.sender.senderID === currentUserInfo.userID
      ) {
        return (
          <UserMessage
            key={message.threadID}
            message={message}
            hideAvatar={isMobile}
          />
        )
      }
      return (
        <AIAgentMessage
          key={message.threadID}
          message={message}
          hideAvatar={isMobile}
        />
      )
    })
  }, [chatMessages, currentUserInfo.userID, isMobile])

  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
    })
  }, [chatMessages, generationMessage])

  const sendAndClearMessage = useCallback(() => {
    if (textAreaVal !== "") {
      onSendMessage(
        {
          threadID: v4(),
          message: textAreaVal,
          sender: {
            senderID: currentUserInfo.userID,
            senderType: SenderType.USER,
          },
        } as ChatMessage,
        agentType,
      )
      setTextAreaVal("")
    }
  }, [agentType, currentUserInfo.userID, onSendMessage, textAreaVal])

  const generationBlock = useMemo(() => {
    return (
      generationMessage && <GenerationMessage message={generationMessage} />
    )
  }, [generationMessage])

  useEffect(() => {
    editState === "EDIT" &&
      showShareDialog &&
      track?.(
        FLOWAGENT_MIXPANEL_EVENT_TYPE.SHOW,
        {
          element: "invite_entry",
        },
        "both",
      )
  }, [editState, showShareDialog, track])

  return (
    <div css={previewChatContainerStyle}>
      {!isMobile && (
        <div css={previewTitleContainerStyle}>
          <div css={previewTitleTextStyle}>
            {agentType === AI_AGENT_TYPE.CHAT
              ? t("editor.ai-agent.title-preview.chat")
              : t("editor.ai-agent.title-preview.text-generation")}
          </div>
          {editState === "EDIT" && showShareDialog && (
            <Button
              disabled={!hasCreated}
              ml="8px"
              colorScheme="grayBlue"
              leftIcon={<DependencyIcon />}
              onClick={() => {
                track?.(
                  FLOWAGENT_MIXPANEL_EVENT_TYPE.CLICK,
                  {
                    element: "invite_entry",
                  },
                  "both",
                )
                onShowShareDialog?.()
              }}
            >
              {t("share")}
            </Button>
          )}
          {editState === "EDIT" && showContributeDialog && (
            <Button
              disabled={!hasCreated}
              ml="8px"
              colorScheme="grayBlue"
              leftIcon={<ContributeIcon />}
              onClick={() => {
                onShowContributeDialog?.()
              }}
            >
              {t("editor.ai-agent.contribute")}
            </Button>
          )}
          {editState === "EDIT" && (
            <Button
              ml="8px"
              colorScheme="grayBlue"
              leftIcon={<GridFillIcon />}
              onClick={() => {
                onClickCreateApp?.()
              }}
            >
              {t("marketplace.agent.create_app")}
            </Button>
          )}
        </div>
      )}
      <div ref={chatRef} css={chatContainerStyle}>
        {agentType === AI_AGENT_TYPE.CHAT ? messagesList : generationBlock}
      </div>
      <div css={inputTextContainerStyle}>
        <AnimatePresence>
          {isReceiving &&
            wsStatus !== FLOWAGENT_WEBSOCKET_STATUS.CLOSED &&
            wsStatus !== FLOWAGENT_WEBSOCKET_STATUS.FAILED && (
              <motion.div
                css={generatingContainerStyle}
                initial={{
                  y: 0,
                  opacity: 0,
                }}
                animate={{
                  y: -16,
                  opacity: 1,
                }}
                exit={{
                  y: 0,
                  opacity: 0,
                }}
                transition={{ duration: 0.2 }}
              >
                <div css={generatingContentContainerStyle}>
                  <div css={generatingTextStyle}>
                    {t("editor.ai-agent.button.generating")}
                  </div>
                  <div css={generatingDividerStyle} />
                  <StopIcon
                    css={stopIconStyle}
                    onClick={() => {
                      onCancelReceiving()
                    }}
                  />
                </div>
              </motion.div>
            )}
          {isRunning &&
            (wsStatus === FLOWAGENT_WEBSOCKET_STATUS.CLOSED ||
              wsStatus === FLOWAGENT_WEBSOCKET_STATUS.FAILED) && (
              <motion.div
                css={generatingContainerStyle}
                initial={{
                  y: 0,
                  opacity: 0,
                }}
                animate={{
                  y: -16,
                  opacity: 1,
                }}
                exit={{
                  y: 0,
                  opacity: 0,
                }}
                transition={{ duration: 0.2 }}
              >
                <div css={generatingContentContainerStyle}>
                  <div css={generatingTextStyle}>
                    {t("editor.ai-agent.message.reconnect")}
                  </div>
                </div>
              </motion.div>
            )}
        </AnimatePresence>
        {blockInput ? (
          <div css={blockInputContainerStyle}>
            <AgentBlockInput />
            <div css={blockInputTextStyle}>
              {editState === "RUN"
                ? t("editor.ai-agent.tips.not-start-run")
                : t("editor.ai-agent.tips.not-start")}
            </div>
          </div>
        ) : isMobile ? (
          <div css={mobileInputStyle}>
            <input
              css={mobileInputElementStyle}
              value={textAreaVal}
              placeholder={t("editor.ai-agent.placeholder.send")}
              onKeyDown={(event) => {
                if (event.keyCode === 13 && !event.shiftKey) {
                  event.preventDefault()
                  if (isReceiving || blockInput) {
                    return
                  }
                  sendAndClearMessage()
                }
              }}
              onChange={(v) => {
                setTextAreaVal(v.target.value)
              }}
            />
            <Button
              disabled={isReceiving || blockInput}
              colorScheme="techPurple"
              onClick={() => {
                sendAndClearMessage()
              }}
            >
              {t("editor.ai-agent.button.send")}
            </Button>
          </div>
        ) : (
          <>
            <textarea
              value={textAreaVal}
              css={inputStyle}
              placeholder={t("editor.ai-agent.placeholder.send")}
              onKeyDown={(event) => {
                if (event.keyCode === 13 && !event.shiftKey) {
                  event.preventDefault()
                  if (isReceiving || blockInput) {
                    return
                  }
                  sendAndClearMessage()
                }
              }}
              onChange={(event) => {
                setTextAreaVal(event.target.value)
              }}
            />
            <Button
              alignSelf="end"
              disabled={isReceiving || blockInput}
              mt="16px"
              colorScheme="techPurple"
              onClick={() => {
                sendAndClearMessage()
              }}
            >
              {t("editor.ai-agent.button.send")}
            </Button>
          </>
        )}
      </div>
    </div>
  )
}
