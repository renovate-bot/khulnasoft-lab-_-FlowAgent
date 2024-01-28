import {
  actionRuntimeAxios,
  authInterceptor,
  errorHandlerInterceptor,
  needAuthAxios,
} from "@flowagent-public/flowagent-net"

needAuthAxios.interceptors.request.use(authInterceptor)
needAuthAxios.interceptors.response.use(undefined, errorHandlerInterceptor)

actionRuntimeAxios.interceptors.request.use(authInterceptor)
