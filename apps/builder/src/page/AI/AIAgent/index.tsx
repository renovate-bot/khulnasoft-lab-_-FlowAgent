import {
  FLOWAGENT_MIXPANEL_BUILDER_PAGE_NAME,
  FLOWAGENT_MIXPANEL_EVENT_TYPE,
} from "@flowagent-public/mixpanel-utils"
import { Agent } from "@flowagent-public/public-types"
import { FC, useEffect } from "react"
import {
  Await,
  redirect,
  useBeforeUnload,
  useLoaderData,
} from "react-router-dom"
import { AIAgent } from "@/page/AI/AIAgent/aiagent"
import {
  track,
  trackPageDurationEnd,
  trackPageDurationStart,
} from "@/utils/mixpanelHelper"

export const AIAgentDefer: FC = () => {
  const data = useLoaderData() as {
    data: Promise<Agent>
  }

  useEffect(() => {
    track(
      FLOWAGENT_MIXPANEL_EVENT_TYPE.VISIT,
      FLOWAGENT_MIXPANEL_BUILDER_PAGE_NAME.AI_AGENT_EDIT,
    )
    trackPageDurationStart()
    return () => {
      trackPageDurationEnd(FLOWAGENT_MIXPANEL_BUILDER_PAGE_NAME.AI_AGENT_EDIT)
    }
  }, [])

  useBeforeUnload(() => {
    trackPageDurationEnd(FLOWAGENT_MIXPANEL_BUILDER_PAGE_NAME.AI_AGENT_EDIT)
  })

  return (
    <Await resolve={data.data} errorElement={<>{redirect("404")}</>}>
      <AIAgent />
    </Await>
  )
}

AIAgentDefer.displayName = "AIAgentRun"
export default AIAgentDefer
