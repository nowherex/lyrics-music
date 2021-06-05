<template>
  <div class="relative min-h-screen md:flex bg-primary">
    <!-- mobile menu bar -->
    <div class="bg-selected text-white flex justify-between items-center md:hidden">
      <div>
        <a href="#" class="flex items-center pl-4">
        <i class="fas fa-music"></i>
        <span class="block font-bold p-4">BetterLyrics</span>
        </a>
      </div>
      <!-- mobile menu button -->
      <button @click="showMobileMenu" class="p-4 focus:outline-none focus:bg-selected">
        <i class="fas fa-bars"></i>
      </button>
    </div>
<!-- sidebar -->
    <div :class="`${mobileMenuActive ? '' : '-translate-x-full'} bg-primary text-white w-64 space-y-6 items-center py-6 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out`">
      <a href="#" class="flex items-center space-x-2 pl-6">
        <i class="fas fa-music p-1"></i>
        <span class="text-2xl font-extrabold">BetterLyrics</span>
      </a>
      <nav class="pl-10">
        <button v-for="(tab, index) in tabs" :key="index" @click="pageId = tab.id" :class="`focus:outline-none flex items-center text-selected-light py-2 px-4 hover:bg-secondary transition duration-200 rounded-l-lg w-full ${ pageId === tab.id ? 'bg-secondary text-white' : ''}`">
          <i :class="`${tab.icon} text-2xl mr-4`"></i>
          <p class="text-lg font-semibold">{{ tab.title }}</p>
        </button>
      </nav>
    </div>
    <!-- content -->
    <div class="flex-1 p-4 bg-secondary">
      <!-- search -->
      <div class="text-secondary">
        <div class="absolute pin-r pin-t mt-3 ml-3 text-purple-lighter"><i class="fas fa-search p-1"></i></div>
      <div><input type="search" class="pl-12 focus:outline-none bg-selected w-full text-white shadow rounded-full border-0 p-3" placeholder="Search by music or artist..."></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
data() {
  return {
    mobileMenuActive: false,
    pageId: 'home',
    tabs: [
      {icon: 'fas fa-home', title: 'Home', id: 'home'},
      {icon: 'fas fa-search', title: 'Discover', id: 'discover'},
      {icon: 'fas fa-music', title: 'Musics', id: 'musics'},
      {icon: 'fas fa-users', title: 'Artists', id: 'artists'},
      {icon: 'fas fa-user', title: 'My Account', id: 'myaccount'},
    ]
  }
},
methods: {
  showMobileMenu() {
    console.log('clicou')
    this.mobileMenuActive = !this.mobileMenuActive
  }
}
}
</script>
<style>
</style>