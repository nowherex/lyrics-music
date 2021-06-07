<template>
 <router-link :to="`/lyric/${data.id}`">
  <li class="flex text-gray-500 hover:bg-primary p-2 cursor-pointer">
    <h1 class="p-3 text-3xl font-bold text-white uppercase">
      {{ data.index + 1 }}°
    </h1>
    <div class="flex flex-wrap">
      <p class="pt-2 text-1xl font-bold text-white uppercase">
        {{ data.name }}
      </p>
      <p class="pt-2 text-lg text-white uppercase">{{ data.art.name}}</p>
    </div>
  </li></router-link>
</template>
<script>
export default {
  name: "LiMusic",
  props: ["data"],
};
</script>
