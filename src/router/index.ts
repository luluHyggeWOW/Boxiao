import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  // 路由模式设置
  history: createWebHistory(),
  routes: [
    {
      path: '/hs',
      redirect: '/hs/trend',
      meta: {
        title: '沪深股票'
      },
      children: [
        {
          path: '/hs/trend',
          component: () => import('@/views/Hs/trend.vue'),
          meta: {
            title: '趋势',
          }
        },
        {
          path: '/hs/industry',
          component: () => import('@/views/Hs/industry.vue'),
          meta: {
            title: '行业',
          }
        }
        ,
        {
          path: '/hs/message',
          component: () => import('@/views/Hs/message.vue'),
          meta: {
            title: '资讯',
          }
        },
        {
          path: '/hs/comparison',
          component: () => import('@/views/Hs/comparison.vue'),
          meta: {
            title: '对比',
          }
        }
      ]
    },
    {
      path: '/bj',
      redirect: '/bj/trend',
      meta: {
        title: '北交所'
      },
      children: [
        {
          path: '/bj/trend',
          component: () => import('@/views/Bj/trend.vue'),
          meta: {
            title: '趋势',
          }
        },
        {
          path: '/bj/message',
          component: () => import('@/views/Bj/message.vue'),
          meta: {
            title: '资讯',
          }
        }
      ]
    },
    {
      path: '/',
      redirect: '/hs/trend'
    },

  ],
  // 滚动行为 控制滚动条位置
  scrollBehavior() {
    return {
      left: 0,
      top: 0
    }
  }
})