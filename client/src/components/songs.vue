<template>
  <v-layout align-center justify-center>
    <v-flex  >
      <panel title="Songs" >
        <div v-for="song in songs" :key="song.id">
          {{song.title}} -
          {{song.artist}} -
          {{song.album}}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    // do a request to the backend for all the songs
    this.songs = (await SongService.index()).data
  }
}
</script>

<style scoped>
</style>
