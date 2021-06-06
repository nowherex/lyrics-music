import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Index.vue";
import NotFound from '@/pages/NotFound.vue'
import MainLayout from '@/layouts/MainLayout.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '/', component: Home },
    ]
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;