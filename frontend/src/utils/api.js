import axios from 'axios'
import { Message } from 'element-ui'
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_URL, // api的base_url
  timeout: 15000 // 请求超时时间2
})
// request拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // Do something with request error
    console.error(error) // for debug
    Promise.reject(error)
  }
)
// response拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    console.log('response.data', res)
    return res
  },
  error => {
    console.error('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  }
)

export const getRequest = url => {
  return service({
    method: 'get',
    url: `${url}`
  })
}
export const postRequest = (url, params) => {
  return service({
    method: 'post',
    url: `${url}`,
    data: params
  })
}

export default service
