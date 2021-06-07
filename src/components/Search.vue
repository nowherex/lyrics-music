<template>
  <div>
    <div class="w-full  px-3 mb-6">
    <div class="relative">
    <div class="flex items-center">
      <span
        :class="`flex items-center bg-selected h-12 shadow-l px-2 ${keyword && showDrop ? 'rounded-tl-full' : 'rounded-l-full'}`"
        ><i class="fas fa-search text-secondary"></i
      ></span>
      <input
        @focus="showDrop = true"
        tabindex="0"
        v-model="keyword"
        type="search"
        :class="`focus:outline-none bg-selected w-full text-white shadow-r border-0 h-12 px-2 ${keyword && showDrop ? 'rounded-tr-full' : ' rounded-r-full'}`"
        placeholder="Search by music or artist..."
      />
    </div>
    <div :class="`${keyword && showDrop ? 'visible' : 'invisible'} absolute z-0 bg-selected text-white p-2 flex flex-col w-full shadow-lg`">
    <ul class="">
      <li
      class="hover:bg-selected-light hover:text-white cursor-pointer rounded px-2"
      v-for="music in musics"
      :key="music.id"
      @click="showDrop = false"
       >
      <router-link :to="`/lyric/${music.id}`">
      <p>Music: {{ music.title }} - Artist: {{ music.band }}</p></router-link>
      </li>
      <li v-show="keyword && showDrop" class="bg-primary h-1"></li>
      <li
      class="hover:bg-selected-light transition duration-200 hover:text-white cursor-pointer rounded px-2"
      v-for="artist in artists"
      :key="artist.id">
        Artist: {{ artist.band }}
      </li>
      <li :class="`${keyword && showDrop ? 'visible' : 'invisible' } float-right`"><router-link to="/"><button class="text-white mt-2 bg-selected-light rounded-full w-32 focus:outline-none hover:bg-primary">Full search</button></router-link></li>
    </ul>
		</div>
      </div>
    </div>



  </div>
</template>

<script>
import api from '@/services/apiSearch.js'
import { debounce } from "lodash";
export default {
  name: "Search",
  data: () => ({
    keyword: "",
    musics: [],
    artists: [],
    showDrop: false
  }),
  methods: {
    async getMusicArtist() {
      const res = await api.getMusicArtist(`${this.keyword}`)
      this.clearSearchs()

        this.insertMusics(res)
        this.insertArtists(res)

    },
    insertMusics(res) {
    const data = [...res.data.response.docs]
    data.filter(item => item.langID)
        .filter(song => {
            this.musics.length < 5 ? this.musics.push(song) : false
        })
    },
    insertArtists(res) {
    const data = [...res.data.response.docs]
    data.filter(item => item.id.charAt(0) == 'b')
        .filter(artist => {
            this.artists.length < 5 ? this.artists.push(artist) : false
        })
    },
    clearSearchs() {
      this.musics = []
      this.artists = []
    }
  },
  created() {
    this.debounceName = debounce(this.getMusicArtist, 1000);
  },
  watch: {
    keyword() {
      if (!this.keyword) {
        this.clearSearchs()
        return;
      } 
      this.debounceName();
    }
  }
};
</script>

<style scoped></style>