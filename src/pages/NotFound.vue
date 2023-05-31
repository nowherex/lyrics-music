<template>
  <div class="flex justify-center items-center min-h-screen bg-primary">
    <!-- content -->
    <div>
      <!-- search -->
      <!-- search -->
      <Search />
      <!-- top-banner -->
      <div
        class="bg-selected shadow rounded p-10 mt-6 flex justify-between"
      >
        <div class="w-md">
          <h1 class="text-white font-bold text-4xl">
           404
          </h1>
          <p class="text-selected-light text-2xl">
Oops, it looks like the page you're looking for doesn't exist.
          </p>
          <div>
            <router-link to="/">
            <button
              class="text-white mt-5 bg-selected-light rounded-full w-32 focus:outline-none hover:bg-primary"
            >
             Home
            </button></router-link>
          </div>
        </div>
      </div>
     </div>
  </div>
</template>
<script>
import Search from "@/components/Search.vue";
export default {
    components: {
    Search,
  },
  name: 'NotFound',
  data() {
    return {
    };
  },
};
</script>
<style></style>
