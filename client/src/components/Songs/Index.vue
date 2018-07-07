<template>
  <v-layout>
    <v-flex xs6>
      <songs-bookmarks />
    </v-flex>
    <v-flex xs6 class="ml-2">
      <songs-search-panel />
      <songs-panel class="mt-2" />
    </v-flex>
  </v-layout>
</template>

<script>
import SongsPanel from './SongsPanel';
import SongsBookmarks from './SongsBookmarks';
import SongsSearchPanel from './SongsSearchPanel';
import SongService from '@/services/SongsService';
export default {
  components: {
    SongsPanel,
    SongsBookmarks,
    SongsSearchPanel
  },
  data () {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route);
    }
  },
  async mounted () {
    // do a request to the backend for all the songs
    this.songs = (await SongService.index()).data
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
  font-size: 18px;
}

.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
