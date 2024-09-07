// 定义成功的响应
export type SuccessResponse = {
  code: number
  data: Array<object>
  message: string
}

// 定义mbti响应值
export type MbtiQuestionResponse = {
  id: number
  options: Array<MbtiAnswerResponse>
  types: string
  class_name: string
  name: string
}

// 定义mbti answer响应值
export type MbtiAnswerResponse = {
  id: number
  answer_id: string
  name: string
  checked: boolean
  letter: string
  question: number
}

// 定义mbti维度选项
export type MbtiDimensionResponse = {
  questionId: number
  letter: string
}

// 定义mbti测试结果类型
export type MbtiResultResponse = {
  E: number
  F: number
  I: number
  J: number
  N: number
  P: number
  S: number
  T: number
}
// 定义mbtiResult结果
export type MbtiResult = {
  id: number
  mbti_type: MBTI
  description?: string
  contribution_to_organization?: string
  leadership_style?: string
  learning_style?: string
  tendency_order?: string
  problem_solving_style?: string
  work_environment_preference?: string
  potential_drawbacks?: string
  suitable_fields?: string
  suitable_careers?: string
  development_suggestions: string
}
export enum MBTI {
  'ISTJ',
  'ISTP',
  'ESTP',
  'ESTJ',
  'ISFJ',
  'ISFP',
  'ESFP',
  'ESFJ',
  'INFJ',
  'INFP',
  'ENFP',
  'ENFJ',
  'INTJ',
  'INTP',
  'ENTP',
  'ENTJ'
}
