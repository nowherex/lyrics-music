<template>
  <div>
    <!-- content -->
    <div>
      <!-- search -->
      <Search />
      <!-- top-banner -->
      <div
        class="bg-selected shadow rounded p-10 mt-6 flex justify-between flex-wrap-reverse"
      >
        <div class="max-w-xs sm:max-w-full">
          <h1 class="text-white font-semibold text-3xl mb-2">
            <i class="fab fa-hotjar"></i> Hot Spots
          </h1>
          <p class="text-selected-light">
Hot Spot is the name of the Vagalume section is updated daily on the home with news clips, music and relevant content for website users. Millions of users log into Vagalume daily to find out what's new in the music world.
          </p>
        </div>
        <div class="max-w-xs rounded mb-2">
        </div>
      </div>
      <!-- HOT SPOTS -->
      <div>
        <div class="text-selected-light font-bold mt-10">
          <i class="fab fa-hotjar"></i> HOT SPOTS
        </div>
        <!-- cards-hots-pots -->
        <div>
          <div class="flex items-center justify-center">
            <div
              class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
            >
              <!-- 1 card -->
              <div v-for="(item, index) in spots"
              :key="index">

              <CardSpots :data="item" />
              </div>
            
            </div>
          </div>
        </div>
      </div>
      </div>
  </div>
</template>
<script>
import CardSpots from '@/components/CardSpots.vue'
import Search from '@/components/Search.vue'
export default {
  components: {
    CardSpots,
    Search
    },
  name: 'Home',
  metaInfo: {
      title: 'BetterLyrics',
      titleTemplate: '%s | BetterLyrics'
    },
  data() {
    return {
      spots: [
        {artist: 'Calvin Harris', music: 'By Your Side (ft. Tom Grennan)', src: 'https://www.vagalume.com.br/calvin-harris/images/140170.webp'},
        {artist: 'David Guetta ft. MORTEN & John Martin', music: 'Impossible (With MORTEN, ft. John Martin)', src: 'https://www.vagalume.com.br/david-guetta/images/140169.webp'},
        {artist: 'Dua Lipa', music: 'Love Again', src: 'https://s2.vagalume.com/dua-lipa/images/140152.jpg'},
        {artist: 'Jxdn', music: 'Think About Me', src: 'https://s2.vagalume.com/jxdn/images/140151.jpg'},
        {artist: 'Jax Jones', music: 'Feels', src: 'https://s2.vagalume.com/jax-jones/images/140143.jpg'},
        {artist: 'Jax Jones', music: 'Feels', src: 'https://s2.vagalume.com/jax-jones/images/140143.jpg'},
        {artist: 'Jax Jones', music: 'Feels', src: 'https://s2.vagalume.com/jax-jones/images/140143.jpg'},
        {artist: 'Jax Jones', music: 'Feels', src: 'https://s2.vagalume.com/jax-jones/images/140143.jpg'},
        {artist: 'Jax Jones', music: 'Feels', src: 'https://s2.vagalume.com/jax-jones/images/140143.jpg'},
        {artist: 'Jax Jones', music: 'Feels', src: 'https://s2.vagalume.com/jax-jones/images/140143.jpg'},
        {artist: 'Jax Jones', music: 'Feels', src: 'https://s2.vagalume.com/jax-jones/images/140143.jpg'},
        {artist: 'Jax Jones', music: 'Feels', src: 'https://s2.vagalume.com/jax-jones/images/140143.jpg'},
        {artist: 'Jax Jones', music: 'Feels', src: 'https://s2.vagalume.com/jax-jones/images/140143.jpg'},
        {artist: 'Jax Jones', music: 'Feels', src: 'https://s2.vagalume.com/jax-jones/images/140143.jpg'},
        {artist: 'Jax Jones', music: 'Feels', src: 'https://s2.vagalume.com/jax-jones/images/140143.jpg'},
        {artist: 'Jax Jones', music: 'Feels', src: 'https://s2.vagalume.com/jax-jones/images/140143.jpg'},
        {artist: 'Jax Jones', music: 'Feels', src: 'https://s2.vagalume.com/jax-jones/images/140143.jpg'},
        {artist: 'Jax Jones', music: 'Feels', src: 'https://s2.vagalume.com/jax-jones/images/140143.jpg'},
        {artist: 'Jax Jones', music: 'Feels', src: 'https://s2.vagalume.com/jax-jones/images/140143.jpg'},
        {artist: 'Jax Jones', music: 'Feels', src: 'https://s2.vagalume.com/jax-jones/images/140143.jpg'},
      ]
    };
  },
};
</script>
<style></style>
