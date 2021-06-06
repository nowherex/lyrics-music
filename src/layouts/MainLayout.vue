<template>
<div class="min-h-screen md:flex bg-primary">
  <div>
    <!-- mobile menu bar -->
    <div
      class="bg-selected text-white flex justify-between items-center md:hidden"
    >
      <div>
        <a href="#" class="flex items-center pl-4">
          <i class="fas fa-music"></i>
          <span class="block font-bold p-4">BetterLyrics</span>
        </a>
      </div>

      <!-- mobile menu button -->
      <button
        @click="showMobileMenu"
        :class="
          `${
            mobileMenuActive ? 'bg-selected-light' : ''
          } p-4 focus:outline-none`
        "
      >
        <i class="fas fa-bars"></i>
      </button>
    </div>

    <!-- sidebar -->
    <div
      :class="
        `${
          mobileMenuActive ? '' : '-translate-x-full'
        } bg-primary text-white w-64 space-y-6 items-center py-6 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out`
      "
    >
      <a href="#" class="flex items-center space-x-2 pl-6">
        <i class="fas fa-music p-1"></i>
        <span class="text-2xl font-extrabold">BetterLyrics</span>
      </a>
      <nav class="pl-10">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click="routeTo(tab)"
          :class="
            `focus:outline-none flex items-center py-2 px-4 mt-2 hover:bg-secondary transition duration-200 rounded-l-lg w-full ${
              pageId === tab.id
                ? 'text-white bg-secondary'
                : 'text-selected-light'
            }`
          "
        >
          <i :class="`${tab.icon} text-2xl mr-4`"></i>
          <p class="text-lg font-semibold">{{ tab.title }}</p>
        </button>
      </nav>
    </div>
  </div>
  <div class="flex-1 p-8 bg-secondary">
    <router-view />
    <div class=" flex items-center justify-center min-w-screen bg-selected rounded m-5 p-5 text-center text-white">Developed by <a class="pl-2" href="https://github.com/nowherex" target="_blank">Leonardo Guedes</a><strong class="pl-3">powered by</strong> <a href="https://www.vagalume.com.br/" target="_blank"><img class="pl-3" src="https://api.vagalume.com.br/images/logo-24.png"></a></div>
  </div>

</div>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
      mobileMenuActive: false,
      pageId: "home",
      tabs: [
        { icon: "fas fa-home", title: "Home", id: "home", link: '/' },
        { icon: "fab fa-hotjar", title: "Hot Spots", id: "hotspots", link: '/Topartist' },
        { icon: "fas fa-music", title: "Musics", id: "musics", link: '/Musics' },
        { icon: "fas fa-guitar", title: "Artists", id: "artists", link: '/' },
        { icon: "fas fa-user", title: "My Account", id: "myaccount", link: '/' },
      ],
    }
  },
    methods: {
    showMobileMenu() {
      this.mobileMenuActive = !this.mobileMenuActive;
    },
    routeTo(item) {
      this.pageId = item.id
      this.$router.push(`${item.link}`)
    }
  },
}
</script>
