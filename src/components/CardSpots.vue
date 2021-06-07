<template>
  <div @click="this.$router.push(`/lyric/${data.musicID}`)" class="bg-selected py-6 px-6 rounded-3xl w-64 h-80 my-4 shadow-xl hover:bg-primary cursor-pointer transition duration-200">
    <div>
      <img
        :src="data.pic_src"
        class="rounded max-w-28 max-h-28"
      />
      <div class="flex justify-between">
        <div class="my-2">
          <p class="font-semibold text-white mb-1">{{ data.title }}</p>
          <p class="text-selected-light">
            {{ data.musTitle }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardSpots",
  props: ['data']
};
</script>
