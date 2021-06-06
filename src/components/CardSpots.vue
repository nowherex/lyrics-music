<template>
  <div class="bg-selected py-6 px-6 rounded-3xl w-64 h-64 my-4 shadow-xl hover:bg-primary cursor-pointer transition duration-200">
    <div>
      <img
        :src="data.src"
        class="rounded max-w-28 max-h-28"
      />
      <div class="flex justify-between">
        <div class="my-2">
          <p class="font-semibold text-white mb-1">{{ data.artist }}</p>
          <p class="text-selected-light">
            {{ data.music }}
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
