import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Index.vue"
import Topartist from "@/pages/Topartist.vue"
import Musics from '@/pages/Musics.vue'
import NotFound from '@/pages/NotFound.vue'
import MainLayout from '@/layouts/MainLayout.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '/', component: Home },
      { path: '/Topartist', component: Topartist },
      { path: '/Musics', component: Musics },
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