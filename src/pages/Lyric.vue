<template>
  <div>
    <div
    v-if="dataReady && data[0].mus.lang === 2"
    @click="translate"
      class="flex flex-wrap float-left my-32 sm:mx-10 justify-center items-center text-secondary fixed w-8 h- rounded-full bg-selected-light cursor-pointer hover:bg-primary-light"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        />
      </svg>
    </div>
    <div>
      <Search />
      <div>
        <div class="container">
          
          <div class="flex items-center justify-center space-y-8 ">
            <div wire:loading v-if="!dataReady" class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
	<div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
	<h2 class="text-center text-white text-xl font-semibold">Loading...</h2>
	<p class="w-1/3 text-center text-white">This may take a few seconds, please don't close this page.</p>
</div>
            <div
              class="flex flex-col items-center w-full text-center bg-selected rounded-lg "
            >
              <div class="flex-col m-3 items-center">
                <div class="flex flex-wrap" v-if="dataReady">
                  <span class="text-2xl font-bold text-white uppercase"
                    ><i class="fas fa-music px-1"></i>
                    {{ data[0].mus.name }}
                  </span>
                  <span class="text-1xl px-4 font-bold text-white uppercase"
                    ><i class="fas fa-guitar px-1"></i>
                    {{ data[0].art.name }}
                  </span>
                </div>
                <div class="">
                  <VideoEmbed v-if="dataReady" class="p-6 sm:h-80" :data="data[0].videoId" />
                </div>
                <div
                  :class="
                    `${
                      showTranslate ? 'sm:grid grid-cols-2' : 'grid grid-cols-1'
                    }  gap-4`
                  "
                >
                  <p class="text-white p-6" v-if="dataReady" v-html="`${data[0].mus.text.replace(/(\r\n|\r|\n)/g,'<br>')}`"></p>
                    <div id="translate"><p
                    class="text-white p-6"
                    v-if="dataReady && showTranslate"
                    v-show="showTranslate"
                    v-html="`${data[0].mus.translate[0].text.replace(/(\r\n|\r|\n)/g,'<br>')}`"
                  ></p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import apiMusic from '@/services/apiMusic.js'
import apiYoutube from '@/services/apiYoutube.js'
import Search from "@/components/Search.vue";
import VideoEmbed from "@/components/VideoEmbed.vue";
export default {
  components: {
    Search,
    VideoEmbed,
  },
  name: "Lyric",
  metaInfo: {
    title: "BetterLyrics",
    titleTemplate: "%s | BetterLyrics",
  },
  data() {
    return {
      idMusic: '',
      dataReady: false,
      data: [],
      showTranslate: false,
    };
  },
  mounted () {
    this.idMusic = this.$route.params.id
    this.getLyric(this.idMusic)

  },
  methods: {
    translate() {
      this.showTranslate = !this.showTranslate
      if(this.showTranslate) {
         this.scroll("translate")
         return 
      }
    },
  scroll(id) {  
      document.getElementById(id).scrollIntoView({
        behavior: "smooth"
      });
    },
    async getLyric(id) {
      this.showTranslate = false
      const data = await apiMusic.getLyric(id)
      const {mus, art} = data.data
      const musicAndArtist = data? `${mus[0].name} ${art.name}` : ''  
      const video = await apiYoutube.getVideo(musicAndArtist)
      const videoId = video.data.items[0].id.videoId
      const newDate = {mus: mus[0], art: art, videoId: videoId}
      this.data = [newDate]
      this.dataReady = true
    }
  },
  watch: {
         '$route.params.id': {
        handler: function(id) {
          this.dataReady = false
          this.getLyric(id)
        },
        deep: true,
        immediate: true
      },
    }
  }
</script>
<style>
.loader {
	border-top-color: #3498db;
	-webkit-animation: spinner 1.5s linear infinite;
	animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
	0% {
		-webkit-transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(360deg);
	}
}

@keyframes spinner {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

</style>
