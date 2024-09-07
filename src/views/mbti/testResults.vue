<template>
  <div v-show="mbtiResult?.length" class="container">
    <el-card style="max-width: 480px">
      <template #header>
        <div class="card-header">
          <span>您属于{{ (mbtiResult || [])[0]?.mbti_type }}类型</span>
        </div>
      </template>
      <p class="text item">您的详细描述</p>
      <hr />
      <p>
        {{ (mbtiResult || [])[0]?.description }}
      </p>
      <p class="text item">发展建议</p>
      <hr />
      <p>
        {{ (mbtiResult || [])[0]?.development_suggestions }}
      </p>
      <p class="text item">学习模式</p>
      <hr />
      <p>
        {{ (mbtiResult || [])[0]?.learning_style }}
      </p>
      <p class="text item">领导风格</p>
      <hr />
      <p>
        {{ (mbtiResult || [])[0]?.leadership_style }}
      </p>
      <p class="text item">潜在缺点</p>
      <hr />
      <p>
        {{ (mbtiResult || [])[0]?.potential_drawbacks }}
      </p>
      <p class="text item">解决问题的风格</p>
      <hr />
      <p>
        {{ (mbtiResult || [])[0]?.problem_solving_style }}
      </p>
      <p class="text item">合适的职业</p>
      <hr />
      <p>
        {{ (mbtiResult || [])[0]?.suitable_careers }}
      </p>
      <p class="text item">合适的领域</p>
      <hr />
      <p>
        {{ (mbtiResult || [])[0]?.suitable_fields }}
      </p>
      <p class="text item">倾向顺序</p>
      <hr />
      <p>
        {{ (mbtiResult || [])[0]?.tendency_order }}
      </p>
      <p class="text item">工作环境偏好</p>
      <hr />
      <p>
        {{ (mbtiResult || [])[0]?.work_environment_preference }}
      </p>
      <p class="text item">对组织的贡献</p>
      <hr />
      <p>
        {{ (mbtiResult || [])[0]?.contribution_to_organization }}
      </p>
      <template #footer>Footer content</template>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getMbtiResult } from '@/api/mbti'
import type { MbtiResult } from '@/types/index'
const route = useRoute()

const mbtiResult = ref<Array<MbtiResult | null>>()

onMounted(async () => {
  console.log(1, route.query)
  const res = async () => {
    const res = await getMbtiResult(route.query.res)
    mbtiResult.value = res.data
  }
  res()
})
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* 将容器高度设置为视口高度 */
}

.el-card {
  width: 100%;
  max-width: 480px;
}
.text {
  font-size: 30px;
}
</style>
