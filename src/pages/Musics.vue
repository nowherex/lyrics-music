<template>
  <div>
    <div>
      <Search />
      <!-- top-banner -->
      <div
        class="bg-selected shadow rounded p-10 mt-6 flex justify-between flex-wrap-reverse"
      >
        <div class="max-w-xs sm:max-w-full">
          <h1 class="text-white font-semibold text-3xl mb-2">
            <i class="fas fa-music"></i> Musics
          </h1>
        </div>
      </div>
      <div>
        <div class="text-selected-light font-bold mt-10 mb-2">
         <i :class="searchMusic ? 'fas fa-music' : 'fas fa-chart-line'"></i> {{ searchMusic ? 'Musics' : 'TOP 100' }}
        </div>
        <div class="container px-6 py-8">
          <div
            class="flex items-center justify-center space-y-8 "
          >
            <div
              class="flex flex-col items-center w-full py-5 space-y-8 text-center bg-selected rounded-lg "
            >
              <div class="flex-shrink-1">
                <span class="pt-2 text-4xl font-bold text-white uppercase"
                  ><i class="fas fa-music"></i>
                  Musics
                </span>
              </div>
              <ul class="flex-1 space-y-4">
                <li v-for="(item, index) in topMusic" :key="index">
                  <LiMusic :data="{ ...item, index }" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div v-show="searchMusic" class="text-selected-light font-bold mt-10 mb-2">
          <span><i class="fas fa-guitar"></i> Artists: </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Search from "@/components/Search.vue";
import LiMusic from '@/components/LiMusic.vue'
import apiRank from '@/services/apiRank.js'
export default {
  components: {
    LiMusic,
    Search,
  },
  name: "Home",
  metaInfo: {
    title: "BetterLyrics",
    titleTemplate: "%s | BetterLyrics",
  },
    mounted () {
   this.apiRank()
  },
  data() {
    return {
      searchMusic: false,
      topMusic: [],
    };
  },
  methods: {
    async apiRank() {
    const resMusic = await apiRank.getRankMusic(20)
    const dataMusic = resMusic.data.mus.month.translations
    this.topMusic = dataMusic
    }
  }
};
</script>
<style></style>
