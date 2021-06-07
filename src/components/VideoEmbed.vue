<template>
  <div>
    <iframe
      width="100%"
      height="100%"
      type="text/html"
      :src="`https://www.youtube.com/embed/${data || ''}`"
      title="YouTube video player"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
</template>
<script>
export default {
  name: "VideoEmbed",
  props: ['data']
};
</script>
