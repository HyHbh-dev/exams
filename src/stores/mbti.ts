import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { MbtiQuestionResponse } from '@/types/index'

export const useMbtiStore = defineStore('mbtiQuestion', () => {
  const mbtiQuestionList = ref<Array<MbtiQuestionResponse>>()
  const setMbtiQuestion = (list: Array<MbtiQuestionResponse>) =>
    (mbtiQuestionList.value = list)
  return { mbtiQuestionList, setMbtiQuestion }
})
