import axios from 'axios'
import { ElMessage } from 'element-plus'
import { diffTokenTime } from '@/utils/auth'
import store from '@/store'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000
})

service.interceptors.request.use(
  (config) => {
    if (localStorage.getItem('token')) {
      if (diffTokenTime()) {
        store.dispatch('app/logout')
        return Promise.reject(new Error('token 失效了'))
      }
    }
    config.headers.Authorization = localStorage.getItem('token')
    return config
  },
  (error) => {
    return Promise.reject(new Error(error))
  }
)

service.interceptors.response.use(
  (response) => {
    console.log(response)
    const { data, meta } = response.data
    if (meta.status === 200 || meta.status === 201) {
      console.log(data)
      return data
    } else {
      ElMessage.error(meta.msg)
      return Promise.reject(new Error(meta.msg))
    }
  }, (error) => {
    console.log(error.response)
    error.response && ElMessage.error(error.response.data)
    return Promise.reject(new Error(error))
  }
)

export default service
