import { request } from '@/utils/request'
import type { MbtiQuestionResponse, MbtiResult } from '@/types/index'
export const getMbit = () => {
  return request.get<Array<MbtiQuestionResponse>>('/api/mbti/questions/')
}

export const getMbtiResult = (data: any) => {
  return request<Array<MbtiResult>>({
    method: 'get', //请求方法
    params: {
      param: data //请求参数
    },
    url: '/api/mbti/result'
  })
}
