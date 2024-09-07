<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div class="head-img">
          <img src="https://static.longjisz.com/new1/logo.png" alt="Logo" />
        </div>
        <h1 class="at-article__h1">MBTI测试</h1>
        <div class="desc">（16人格）</div>
        <p class="at-article__p">国际通用版MBTI人格测试</p>
      </el-header>
      <el-main>
        <router-view />
        <el-card style="max-width: 480px">
          <template #header>完整版测试</template>
          <h2>200题</h2>
        </el-card>
        <el-button
          icon="Finished"
          round
          size="large"
          style="margin-top: 15px"
          @click="getQuestions()"
          >开始测试</el-button
        >
      </el-main>
      <el-footer>
        <h2>MBTI测试须知</h2>
        <p class="footer-content">
          1、参加测试的人员请务必诚实、独立地回答问题，只有如此，才能得到较为有效的结果。<br />
          2、测试所得的分析报告展示的是你的性格倾向，而不是你的知识、技能、经验。<br />
          3、MBTI提供的性格类型描述仅供测试者确定自己的性格类型之用，性格类型没有好坏，只有不同。每一种性格特征都有其价值和优点，也有缺点和需要注意的地方，清楚地了解自己的性格优劣势，有利于更好地发挥自己的特长并尽可能地在为人处事中避免自己性格中的劣势，更好地和他人相处，更好地做重要的决策。<br />
          4、如果你认真、真实地完成了测试问卷，那么你有可能得到一个和你的性格相匹配的类型。但是因为MBTI的16型人格分类是脸谱化的分类方法，你的性格与测试结果的描述很难做到完全相符。更准确的判定方式是研读更深入的学术著作并进行自我审视。在研读和自我审视的过程中加深自我认知，更了解自己。希望你能从本次测试中或多或少地有所收获
        </p>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const getQuestions = () => {
  router.push('/mbti/exam')
}
</script>

<style scoped>
.el-header {
  display: flex;
  flex-direction: column; /* 使内容垂直排列 */
  justify-content: center; /* 垂直居中 */
  align-items: center; /* 水平居中 */
  height: 200px; /* 设定高度以便更好地展示居中效果 */
}

.head-img {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  margin-bottom: 10px; /* 与其他元素分隔 */
}

.head-img img {
  height: 68px;
}

.common-layout {
  background-color: #e5eafd;
}

.at-article__h1 {
  text-align: center;
  margin: 0;
}

.desc {
  text-align: center;
  margin: 0;
}

.at-article__p {
  text-align: center;
  margin: 0;
}

.el-main {
  display: flex;
  flex-direction: column; /* 使内容垂直排列 */
  justify-content: center; /* 垂直居中 */
  align-items: center; /* 水平居中 */
  padding: 20px 0; /* 增加上下内边距 */
}

.el-footer {
  text-align: center;
  padding: 20px 0;
}

.footer-content {
  max-width: 800px; /* 设置最大宽度以便在较大屏幕上居中 */
  margin: 0 auto; /* 水平居中 */
  text-align: left; /* 段落内容左对齐 */
  padding: 0 20px; /* 增加左右内边距 */
}
</style>
