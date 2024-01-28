import { SerializedStyles } from "@emotion/react"
import { IFLOWAGENTCodeMirrorProps } from "./CodeMirror/interface"

export interface CodeEditorProps
  extends Omit<
    IFLOWAGENTCodeMirrorProps,
    | "hasError"
    | "resultType"
    | "result"
    | "executionResult"
    | "expressions"
    | "canShowResultRealtime"
  > {
  wrapperCss?: SerializedStyles
}
