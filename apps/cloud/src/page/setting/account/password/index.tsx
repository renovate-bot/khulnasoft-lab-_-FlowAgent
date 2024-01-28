import { isFLOWAGENTAPiError } from "@flowagent-public/flowagent-net"
import { LayoutAutoChange } from "@flowagent-public/layout-auto-change"
import { ResetPwdFields } from "@flowagent-public/sso-module/ResetPasswordPage/interface"
import { getCurrentUser } from "@flowagent-public/user-data"
import { FC, useState } from "react"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { useMessage } from "@flowagent-design/react"
import { TeamProvider } from "@/page/setting/context"
import { PasswordSettingFields } from "@/page/setting/interface"
import { fetchUpdateUserPassword } from "@/services/user"
import { MobilePasswordSettingContent } from "./mobile"
import { PasswordSettingContent } from "./pc"

const PasswordSettingPage: FC = () => {
  const { t } = useTranslation()
  const userInfo = useSelector(getCurrentUser)
  const [passwordLoading, setPasswordLoading] = useState(false)

  const message = useMessage()

  const passwordFormProps = useForm<PasswordSettingFields>({
    mode: "onSubmit",
    criteriaMode: "firstError",
  })
  const setPasswordFormProps = useForm<ResetPwdFields>({
    mode: "onSubmit",
    criteriaMode: "firstError",
    defaultValues: {
      email: userInfo?.email,
    },
  })

  const onPasswordFormSubmit: SubmitHandler<PasswordSettingFields> = async (
    data,
  ) => {
    try {
      setPasswordLoading(true)
      await fetchUpdateUserPassword(data)
      message.success({
        content: t("team_setting.message.save_suc"),
      })
      passwordFormProps.reset()
    } catch (e) {
      if (isFLOWAGENTAPiError(e)) {
      }
    } finally {
      setPasswordLoading(false)
    }
  }

  return (
    <TeamProvider passwordFormProps={passwordFormProps}>
      <FormProvider {...setPasswordFormProps}>
        <LayoutAutoChange
          desktopPage={
            <PasswordSettingContent
              onPasswordFormSubmit={onPasswordFormSubmit}
              passwordLoading={passwordLoading}
            />
          }
          mobilePage={
            <MobilePasswordSettingContent
              onPasswordFormSubmit={onPasswordFormSubmit}
              passwordLoading={passwordLoading}
            />
          }
        />
      </FormProvider>
    </TeamProvider>
  )
}

export default PasswordSettingPage
