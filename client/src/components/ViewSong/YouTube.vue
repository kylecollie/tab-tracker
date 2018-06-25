<template>
  <panel title="YouTube Video">
    <youtube
    :video-id="youtubeId"
    :player-width="400"
    :player-height="180">
    </youtube>
  </panel>
</template>

<script>

export default {
  props: [
    'youtubeId'
  ],
  components: {
  }
}
</script>

<style scoped>

</style>
