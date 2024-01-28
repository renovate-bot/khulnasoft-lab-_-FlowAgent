import dayjs from "dayjs"
import { merge } from "lodash-es"
import _ from "lodash-es"
import numbro from "numbro"
import Papa from "papaparse"
import { NIL, parse, stringify, v1, v3, v4, v5, validate, version } from "uuid"
import {
  getExecutionResult,
  getExecutionResultToCurrentPageCodeMirror,
  getExecutionResultToGlobalCodeMirror,
} from "@/redux/currentApp/executionTree/executionSelector"
import { executionActions } from "@/redux/currentApp/executionTree/executionSlice"
import store from "@/store"
import { runActionWithExecutionResult } from "../action/runAction"
import {
  copyToClipboard,
  downloadFile,
  goToURL,
  setRouter,
  showNotification,
} from "../eventHandlerHelper/utils/commonUtils"
import {
  downloadFromFLOWAGENTDrive,
  saveToFLOWAGENTDrive,
} from "../eventHandlerHelper/utils/driveUtils"
import {
  setGlobalDataIn,
  setGlobalDataValue,
} from "../eventHandlerHelper/utils/globalDataUtils"
import {
  clearLocalStorage,
  setValueLocalStorage,
} from "../eventHandlerHelper/utils/localStorage"

const THIRD_PARTY_PACKAGES = {
  _: {
    ..._,
  },
  uuid: {
    NIL,
    parse,
    stringify,
    v1,
    v3,
    v4,
    v5,
    validate,
    version,
  },
  dayjs,
  numbro,
  Papa,
}
class FLOWAGENTEditorRuntimePropsCollector {
  private _runtimeProps: Record<string, unknown> = {}
  private static instance: FLOWAGENTEditorRuntimePropsCollector | null = null

  constructor() {
    this._runtimeProps = {
      ...THIRD_PARTY_PACKAGES,
      utils: {
        goToURL,
        showNotification,
        copyToClipboard,
        setRouter,
        downloadFile,
        downloadFromFLOWAGENTDrive,
        saveToFLOWAGENTDrive,
        setGlobalDataIn,
        setGlobalDataValue,
        setLocalStorage: setValueLocalStorage,
        clearLocalStorage,
      },
    }
  }

  public static getInstance(): FLOWAGENTEditorRuntimePropsCollector {
    if (!FLOWAGENTEditorRuntimePropsCollector.instance) {
      FLOWAGENTEditorRuntimePropsCollector.instance =
        new FLOWAGENTEditorRuntimePropsCollector()
    }
    return FLOWAGENTEditorRuntimePropsCollector.instance
  }

  public addRuntimeProp(displayName: string, runtimeProp: unknown) {
    this._runtimeProps[displayName] = runtimeProp
  }

  public deleteRuntimeProp(displayName: string) {
    if (!this._runtimeProps[displayName]) return
    delete this._runtimeProps[displayName]
  }

  public getRuntimeProps() {
    return this._runtimeProps
  }

  public getThirdPartyPackages() {
    return THIRD_PARTY_PACKAGES
  }

  public getGlobalCalcContext(otherContext?: Record<string, unknown>) {
    const rootState = store.getState()
    const executionResult = getExecutionResult(rootState)

    const formatedExecutionResult = Object.keys(executionResult).reduce(
      (acc, prevKey) => {
        const prev = executionResult[prevKey]
        if (!prev) {
          return acc
        }
        if (prev.$type === "ACTION") {
          return {
            ...acc,
            [prev.displayName]: {
              ...prev,
              trigger: async () => {
                return await runActionWithExecutionResult(prev, false)
              },
            },
          }
        }
        return {
          ...acc,
          [prevKey]: prev,
        }
      },
      {} as Record<string, any>,
    )
    return merge({}, this._runtimeProps, formatedExecutionResult, otherContext)
  }

  public getCurrentPageCalcContext(otherContext?: Record<string, unknown>) {
    const rootState = store.getState()
    const executionResult = getExecutionResultToCurrentPageCodeMirror(
      rootState,
    ) as Record<string, any>
    const formatedExecutionResult = Object.keys(executionResult).reduce(
      (acc, prevKey) => {
        const prev = executionResult[prevKey]

        if (!prev) {
          return acc
        }

        if (
          (Object.hasOwn && Object.hasOwn(prev, "actionType")) ||
          Object.prototype.hasOwnProperty.call(prev, "actionType")
        ) {
          return {
            ...acc,
            [prev.displayName]: {
              ...prev,
              trigger: async () => {
                return await runActionWithExecutionResult(prev, false)
              },
            },
          }
        }
        if (prev.$type === "WIDGET") {
          switch (prev.$widgetType) {
            case "MODAL_WIDGET":
              return {
                ...acc,
                [prevKey]: {
                  ...prev,
                  openModal: () => {
                    store.dispatch(
                      executionActions.updateModalDisplayReducer({
                        display: true,
                        displayName: prevKey,
                      }),
                    )
                  },
                  closeModal: () => {
                    store.dispatch(
                      executionActions.updateModalDisplayReducer({
                        display: false,
                        displayName: prevKey,
                      }),
                    )
                  },
                },
              }
          }
        }
        return {
          ...acc,
          [prevKey]: prev,
        }
      },
      {} as Record<string, any>,
    )
    return merge({}, this._runtimeProps, formatedExecutionResult, otherContext)
  }

  public getGlobalCalcContextWithLimit(otherContext?: Record<string, unknown>) {
    const rootState = store.getState()
    const executionResult = getExecutionResultToGlobalCodeMirror(rootState)
    return merge({}, this._runtimeProps, executionResult, otherContext)
  }
}

export const FLOWAGENTEditorRuntimePropsCollectorInstance =
  FLOWAGENTEditorRuntimePropsCollector.getInstance()
