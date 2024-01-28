import { FC, ReactNode, createContext, useCallback, useMemo } from "react"
import {
  IFLOWAGENTProperties,
  IFLOWAGENT_MIXPANEL_EVENT_TYPE,
  IFLOWAGENT_PAGE_NAME,
} from "./interface"

interface IInject {
  track: (
    event: IFLOWAGENT_MIXPANEL_EVENT_TYPE,
    properties: Omit<IFLOWAGENTProperties, "page">,
    extendProperty?: "userRole" | "team_id" | "both",
  ) => void
  pageName: IFLOWAGENT_PAGE_NAME
}

export const MixpanelTrackContext = createContext<IInject>({} as IInject)

interface MixpanelTrackProviderProps {
  basicTrack: (
    event: IFLOWAGENT_MIXPANEL_EVENT_TYPE,
    pageName: IFLOWAGENT_PAGE_NAME,
    properties: Omit<IFLOWAGENTProperties, "page">,
    extendProperty?: "userRole" | "team_id" | "both",
  ) => void
  pageName: IFLOWAGENT_PAGE_NAME
  children: ReactNode
}

export const MixpanelTrackProvider: FC<MixpanelTrackProviderProps> = (
  props,
) => {
  const { children, basicTrack, pageName } = props

  const track = useCallback(
    (
      event: IFLOWAGENT_MIXPANEL_EVENT_TYPE,
      properties: Omit<IFLOWAGENTProperties, "page">,
      extendProperty?: "userRole" | "team_id" | "both",
    ) => {
      basicTrack(event, pageName, properties, extendProperty)
    },
    [basicTrack, pageName],
  )

  const injectValue = useMemo(() => {
    return {
      track,
      pageName,
    }
  }, [pageName, track])

  return (
    <MixpanelTrackContext.Provider value={injectValue}>
      {children}
    </MixpanelTrackContext.Provider>
  )
}

MixpanelTrackProvider.displayName = "MixpanelTrackProvider"
