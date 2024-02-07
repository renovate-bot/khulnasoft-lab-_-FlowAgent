import { SerializedStyles } from "@emotion/react"
import { FLOWAGENTCodeMirrorProps } from "./CodeMirror/interface"

export interface CodeEditorProps
  extends Omit<
    FLOWAGENTCodeMirrorProps,
    | "hasError"
    | "resultType"
    | "result"
    | "executionResult"
    | "expressions"
    | "canShowResultRealtime"
  > {
  wrapperCss?: SerializedStyles
}
