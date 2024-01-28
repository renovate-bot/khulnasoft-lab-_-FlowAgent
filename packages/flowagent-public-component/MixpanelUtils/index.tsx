import mixpanel from "mixpanel-browser"
import {
  IFLOWAGENTProperties,
  IFLOWAGENT_MIXPANEL_EVENT_TYPE,
  IFLOWAGENT_PAGE_NAME,
} from "./interface"
import { getDeviceUUID } from "./utils"

export * from "./interface"
export * from "./mixpanelContext"
class IFLOWAGENTMixpanelTools {
  private static instance: IFLOWAGENTMixpanelTools | null = null
  private enable: boolean = false

  constructor() {
    this.enable =
      process.env.IFLOWAGENT_INSTANCE_ID === "CLOUD" &&
      !!process.env.IFLOWAGENT_MIXPANEL_API_KEY
    if (this.enable) {
      mixpanel.init(process.env.IFLOWAGENT_MIXPANEL_API_KEY as string, {
        debug: process.env.IFLOWAGENT_APP_ENV === "development",
        test: process.env.IFLOWAGENT_APP_ENV !== "production",
        ignore_dnt: process.env.IFLOWAGENT_APP_ENV === "development",
        loaded(mixpanelProto) {
          const originalTrack = mixpanelProto.track
          mixpanelProto.track = function (event, properties) {
            originalTrack.call(mixpanelProto, event, {
              ...properties,
              environment: process.env.IFLOWAGENT_APP_ENV,
              fe_version_code: process.env.IFLOWAGENT_APP_VERSION,
            })
          }
        },
      })
    }
  }

  public async setDeviceID() {
    if (this.enable) {
      const deviceID = await getDeviceUUID()
      mixpanel.register({
        IFLOWAGENT_device_ID: deviceID,
      })
    }
  }

  public static getInstance() {
    if (!this.instance) {
      this.instance = new IFLOWAGENTMixpanelTools()
    }

    return this.instance
  }

  public track(event: IFLOWAGENT_MIXPANEL_EVENT_TYPE, properties: IFLOWAGENTProperties) {
    if (this.enable) {
      mixpanel.track(event, {
        ...properties,
      })
    }
  }

  public setGroup(teamIdentifier: string | string[]) {
    if (this.enable) {
      mixpanel.set_group("team", teamIdentifier)
    }
  }

  public pageTimeEvent() {
    if (this.enable) {
      mixpanel.time_event("page_duration")
    }
  }

  public trackTimeEvent(pageName: IFLOWAGENT_PAGE_NAME, teamIdentifier: string) {
    if (this.enable) {
      mixpanel.track("page_duration", {
        page: pageName,
        team_id: teamIdentifier,
      })
    }
  }

  public getMixpanelInstance() {
    if (this.enable) {
      return mixpanel
    }
  }
}

export const IFLOWAGENTMixpanel = IFLOWAGENTMixpanelTools.getInstance()
