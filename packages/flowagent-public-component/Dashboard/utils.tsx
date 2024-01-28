import { ResourceType } from "@flowagent-public/public-types"
import { COPY_STATUS, copyToClipboard as copy } from "@flowagent-public/utils"
import i18n from "i18next"
import { ReactNode, lazy } from "react"
import { createMessage } from "@flowagent-design/react"

const SupabaseIcon = lazy(
  () => import("@flowagent-public/icon/actionIcons/supabase"),
)
const GraphQLIcon = lazy(() => import("@flowagent-public/icon/actionIcons/graphql"))
const ElasticIcon = lazy(() => import("@flowagent-public/icon/actionIcons/elastic"))
const DynamoIcon = lazy(() => import("@flowagent-public/icon/actionIcons/dynamo"))
const SnowflakeIcon = lazy(
  () => import("@flowagent-public/icon/actionIcons/snowflake"),
)
const SmtpIcon = lazy(() => import("@flowagent-public/icon/actionIcons/smtp"))
const GoogleSheetIcon = lazy(
  () => import("@flowagent-public/icon/actionIcons/googlesheets"),
)
const HuggingFaceIcon = lazy(
  () => import("@flowagent-public/icon/actionIcons/huggingface"),
)
const MariaDbIcon = lazy(() => import("@flowagent-public/icon/actionIcons/mariadb"))
const TidbIcon = lazy(() => import("@flowagent-public/icon/actionIcons/tidb"))
const NeonIcon = lazy(() => import("@flowagent-public/icon/actionIcons/neon"))
const S3Icon = lazy(() => import("@flowagent-public/icon/actionIcons/s3"))
const MySqlIcon = lazy(() => import("@flowagent-public/icon/actionIcons/mysql"))
const MicrosoftSqlIcon = lazy(
  () => import("@flowagent-public/icon/actionIcons/microsoftsql"),
)
const RestApiIcon = lazy(() => import("@flowagent-public/icon/actionIcons/restapi"))
const MongoDbIcon = lazy(() => import("@flowagent-public/icon/actionIcons/mongodb"))
const RedisIcon = lazy(() => import("@flowagent-public/icon/actionIcons/redis"))
const UpstashIcon = lazy(() => import("@flowagent-public/icon/actionIcons/upstash"))
const HydraIcon = lazy(() => import("@flowagent-public/icon/actionIcons/dydra"))
const PostgreSqlIcon = lazy(
  () => import("@flowagent-public/icon/actionIcons/postgresql"),
)
const FirebaseIcon = lazy(
  () => import("@flowagent-public/icon/actionIcons/firebase"),
)
const ClickhouseIcon = lazy(
  () => import("@flowagent-public/icon/actionIcons/clickhouse"),
)
const CouchDBIcon = lazy(() => import("@flowagent-public/icon/actionIcons/couchdb"))
const OracleDBIcon = lazy(() => import("@flowagent-public/icon/actionIcons/oracle"))
const AppwriteIcon = lazy(
  () => import("@flowagent-public/icon/actionIcons/appwrite"),
)
const AirtableIcon = lazy(
  () => import("@flowagent-public/icon/actionIcons/airtable"),
)

const message = createMessage()

export const copyToClipboard = (text: string) => {
  const flag = copy(text)
  if (flag === COPY_STATUS.EMPTY) {
    message.info({
      content: i18n.t("empty_copied_tips"),
    })
  } else {
    message.success({
      content: i18n.t("copied"),
    })
  }
}
export function getIconFromResourceType(
  type: ResourceType,
  size: string,
): ReactNode | null {
  switch (type) {
    case "supabasedb":
      return <SupabaseIcon size={size} />
    case "graphql":
      return <GraphQLIcon size={size} />
    case "elasticsearch":
      return <ElasticIcon size={size} />
    case "dynamodb":
      return <DynamoIcon size={size} />
    case "snowflake":
      return <SnowflakeIcon size={size} />
    case "smtp":
      return <SmtpIcon size={size} />
    case "googlesheets":
      return <GoogleSheetIcon size={size} />
    case "hfendpoint":
    case "huggingface":
      return <HuggingFaceIcon size={size} />
    case "mariadb":
      return <MariaDbIcon size={size} />
    case "tidb":
      return <TidbIcon size={size} />
    case "neon":
      return <NeonIcon size={size} />
    case "s3":
      return <S3Icon size={size} />
    case "mysql":
      return <MySqlIcon size={size} />
    case "mssql":
      return <MicrosoftSqlIcon size={size} />
    case "restapi":
      return <RestApiIcon size={size} />
    case "mongodb":
      return <MongoDbIcon size={size} />
    case "redis":
      return <RedisIcon size={size} />
    case "upstash":
      return <UpstashIcon size={size} />
    case "hydra":
      return <HydraIcon size={size} />
    case "postgresql":
      return <PostgreSqlIcon size={size} />
    case "firebase":
      return <FirebaseIcon size={size} />
    case "clickhouse":
      return <ClickhouseIcon size={size} />
    case "couchdb":
      return <CouchDBIcon size={size} />
    case "oracle":
    case "oracle9i":
      return <OracleDBIcon size={size} />
    case "appwrite":
      return <AppwriteIcon size={size} />
    case "airtable":
      return <AirtableIcon size={size} />
  }
  return null
}
