import { createWebHistory, createRouter } from "vue-router";
import MainLayout from '@/layouts/MainLayout.vue'
import Home from "@/pages/Index.vue"
import Topartist from "@/pages/Topartist.vue"
import Musics from '@/pages/Musics.vue'
import NotFound from '@/pages/NotFound.vue'
import Lyric from '@/pages/Lyric.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '/', component: Home },
      { path: '/Topartist', component: Topartist },
      { path: '/Musics', component: Musics },
      { path: '/Lyric/:id', component: Lyric },
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