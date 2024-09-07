import { createWebHashHistory, createRouter } from 'vue-router'
const routes = [
  {
    path: '/mbti',
    component: () => import('@/views/mbti/MBTI.vue'),
    redirect: '/mbti/begin',
    children: [
      { path: 'begin', component: () => import('@/views/mbti/beginView.vue') },
      { path: 'exam', component: () => import('@/views/mbti/examDetail.vue') },
      {
        path: 'testResults',
        component: () => import('@/views/mbti/testResults.vue')
      }
    ]
  },
  {
    path: '/',
    redirect: '/mbti'
  }
]

export const router = createRouter({
  history: createWebHashHistory(), // 使用 createWebHistory
  routes
})
