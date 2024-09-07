import axios from 'axios'
const request = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  timeout: 50000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

// 添加响应拦截器
request.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export { request }
