import { LayoutAutoChange } from "@flowagent-public/layout-auto-change"
import {
  FLOWAGENT_MIXPANEL_BUILDER_PAGE_NAME,
  FLOWAGENT_MIXPANEL_EVENT_TYPE,
} from "@flowagent-public/mixpanel-utils"
import { FC, useEffect } from "react"
import {
  Await,
  redirect,
  useBeforeUnload,
  useLoaderData,
} from "react-router-dom"
import AIAgentRunMobile from "@/page/AI/AIAgentRun/AIAgentRunMobile"
import AIAgentRunPC from "@/page/AI/AIAgentRun/AIAgentRunPC"
import {
  track,
  trackPageDurationEnd,
  trackPageDurationStart,
} from "@/utils/mixpanelHelper"

export const AIAgentRun: FC = () => {
  const data = useLoaderData() as {
    data: Promise<any>
  }

  useEffect(() => {
    track(
      FLOWAGENT_MIXPANEL_EVENT_TYPE.VISIT,
      FLOWAGENT_MIXPANEL_BUILDER_PAGE_NAME.AI_AGENT_RUN,
    )
    trackPageDurationStart()
    return () => {
      trackPageDurationEnd(FLOWAGENT_MIXPANEL_BUILDER_PAGE_NAME.AI_AGENT_RUN)
    }
  }, [])

  useBeforeUnload(() => {
    trackPageDurationEnd(FLOWAGENT_MIXPANEL_BUILDER_PAGE_NAME.AI_AGENT_RUN)
  })

  return (
    <Await resolve={data.data} errorElement={<>{redirect("404")}</>}>
      <LayoutAutoChange
        desktopPage={<AIAgentRunPC />}
        mobilePage={<AIAgentRunMobile />}
      />
    </Await>
  )
}

AIAgentRun.displayName = "AIAgentRun"
export default AIAgentRun
