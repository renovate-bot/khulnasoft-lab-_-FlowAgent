import { Transformer } from "@flowagent-public/public-types"
import { evaluateDynamicString } from "../evaluateDynamicString"
import { wrapFunctionCode } from "../evaluateDynamicString/utils"
import { FLOWAGENTEditorRuntimePropsCollectorInstance } from "../executionTreeHelper/runtimePropsCollector"

export function runTransformer(transformer: Transformer, rawData: any) {
  let calcResult: any = rawData
  if (transformer?.enable) {
    const evaluateTransform = wrapFunctionCode(transformer.rawData)
    const canEvalString = `{{${evaluateTransform}()}}`
    const finalContext =
      FLOWAGENTEditorRuntimePropsCollectorInstance.getGlobalCalcContext({
        data: rawData,
      })
    try {
      calcResult = evaluateDynamicString("events", canEvalString, finalContext)
    } catch (e) {
      console.log(e)
    }
  }
  return calcResult
}
