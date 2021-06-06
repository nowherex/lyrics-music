<template>
  <li
    class="flex flex-wrap items-center text-gray-500 hover:bg-primary p-2 cursor-pointer"
  >
    <h1 class="p-3 text-3xl font-bold text-white uppercase">
      {{ data.index + 1 }}°
    </h1>
    <div class="flex items-center pl-4">
      <img :src="data.src" class="max-h-12 rounded-full" />
      <p class="p-2 pl-6 text-lg text-white uppercase">{{ data.artist }}</p>
    </div>
  </li>
</template>
<script>
export default {
  name: "LiArtist",
  props: ["data"],
};
</script>
