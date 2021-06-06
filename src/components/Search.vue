<template>
      <div>
        <div class="flex items-center">
          <span
            class="flex items-center bg-selected h-12 shadow-l px-2 rounded-l-full"
            ><i class="fas fa-search text-secondary"></i
          ></span>
          <input
            type="search"
            class="focus:outline-none bg-selected w-full text-white shadow-r rounded-r-full border-0 h-12 px-2"
            placeholder="Search by music or artist..."
          />
        </div>
      </div>
</template>
<script>
export default {
    name: 'Search',
    setup() {
        
    },
}
</script>