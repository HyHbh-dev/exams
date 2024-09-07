<template>
  <div class="common-layout">
    <el-container>
      <el-header>MBTI性格测试</el-header>
      <el-main>
        <div v-for="(question, index) in mbtiQuestionList" :key="question.id">
          <div class="card-container" v-show="index === active">
            <h2>{{ question.name }}</h2>
            <el-card
              style="width: 480px"
              shadow="hover"
              v-for="answer in question.options"
              :key="answer.id"
              @click="selectAnswer(question.id, answer.letter)"
              >{{ answer.name }}
            </el-card>
            <el-button type="primary" @click="perv">上一题</el-button>
          </div>
          <el-button
            type="primary"
            @click="finishTest"
            v-show="
              index === active && index === (mbtiQuestionList || []).length - 1
            "
            >完成测试
          </el-button>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { getMbit } from '@/api/mbti'
import { useMbtiStore } from '@/stores/mbti'
import type { MbtiDimensionResponse, MbtiResultResponse } from '@/types'
import { useRouter } from 'vue-router'
const router = useRouter()
const store = useMbtiStore()
const { setMbtiQuestion } = store

onMounted(async () => {
  const res = await getMbit()
  setMbtiQuestion(res.data)
})
const mbtiQuestionList = computed(() => store.mbtiQuestionList)

// 获许题目和选项信息
const active = ref<number>(0)
const selectedAnswers = ref<MbtiDimensionResponse[]>([])
const selectAnswer = (questionId: number, letter: string) => {
  // 检查该问题的答案是否已存在，如果存在则更新
  if (active.value === (mbtiQuestionList.value?.length as number) - 1) {
    finishTest()
  }
  const existingAnswerIndex = selectedAnswers.value.findIndex(
    (answer) => answer.questionId === questionId
  )

  if (existingAnswerIndex !== -1) {
    // 更新答案
    selectedAnswers.value[existingAnswerIndex].letter = letter
  } else {
    // 添加新的答案
    selectedAnswers.value.push({ questionId, letter })
  }

  // 进入下一题
  active.value += 1
}
// 上一题
const perv = () => {
  if (active.value === 0) {
    return
  }
  active.value -= 1
}
// 获取结果
function getMbtiResult(letterCount: MbtiResultResponse): string {
  const result = [
    letterCount.E >= letterCount.I ? 'E' : 'I',
    letterCount.S >= letterCount.N ? 'S' : 'N',
    letterCount.T >= letterCount.F ? 'T' : 'F',
    letterCount.J >= letterCount.P ? 'J' : 'P'
  ]

  return result.join('')
}
// 完成测试
const finishTest = () => {
  // 统计每个字母的数量
  const letterCount: MbtiResultResponse = selectedAnswers.value.reduce(
    (acc, answer) => {
      const letter = answer.letter as keyof MbtiResultResponse // 类型断言
      acc[letter] = (acc[letter] || 0) + 1
      return acc
    },
    { E: 0, F: 0, I: 0, J: 0, N: 0, P: 0, S: 0, T: 0 } as MbtiResultResponse
  )
  const res = getMbtiResult(letterCount)
  // 这里可以进一步处理结果，例如显示结果或提交到服务器
  router.push({ path: '/mbti/testResults', query: { res } })
}
</script>

<style scoped>
.el-header {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: 100px; /* 设定一个固定的高度 */
  font-size: 24px; /* 可以根据需要调整字体大小 */
  font-weight: bold; /* 加粗字体 */
  text-align: center;
}

.common-layout {
  background-color: #e5eafd;
}

/* 使卡片容器居中显示 */
.card-container {
  display: flex;
  flex-direction: column; /* 使标题和卡片垂直排列 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  gap: 16px; /* 卡片和标题之间的间距 */
  margin: 0 auto; /* 使整个容器在主轴方向居中 */
  max-width: 1000px; /* 限制最大宽度，以防卡片过度拉伸 */
  padding: 20px; /* 内边距，增加视觉空间 */
}

.card-container h2 {
  font-size: 20px; /* 标题的字体大小 */
  font-weight: normal; /* 标题的字体粗细 */
  margin: 0; /* 清除默认的外边距 */
}
</style>
