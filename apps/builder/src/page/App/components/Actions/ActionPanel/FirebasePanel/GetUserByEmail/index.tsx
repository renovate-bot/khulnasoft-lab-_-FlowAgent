import { FirebaseGetUserByEmail } from "@flowagent-public/public-types"
import { FC } from "react"
import { useTranslation } from "react-i18next"
import { FirebaseActionPartProps } from "@/page/App/components/Actions/ActionPanel/FirebasePanel/intreface"
import { InputEditor } from "@/page/App/components/Actions/InputEditor"
import { VALIDATION_TYPES } from "@/utils/validationFactory"

export const GetUserByEmailPart: FC<FirebaseActionPartProps> = (props) => {
  const { t } = useTranslation()
  const options = props.options as FirebaseGetUserByEmail
  const { handleValueChange } = props

  return (
    <InputEditor
      title={t("editor.action.panel.firebase.email")}
      value={options.filter}
      onChange={(value) => handleValueChange(value, "filter")}
      expectedType={VALIDATION_TYPES.STRING}
    />
  )
}

GetUserByEmailPart.displayName = "GetUserByEmailPart"
