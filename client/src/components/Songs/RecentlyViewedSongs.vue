<template>
  <panel title="Recently Viewed Songs">
    <v-data-table
      :headers="headers"
      :pagination.sync="pagination"
      :items="songs">
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">
          {{props.item.title}}
        </td>
        <td class="text-xs-left">
          {{props.item.artist}}
        </td>
      </template>
    </v-data-table>
  </panel>
</template>

<script>
import { mapState } from 'vuex';
import SongHistoryService from '@/services/SongHistoryService';

export default {
  data () {
    return {
      headers: [
        {
          text: 'Title',
          value: 'title',
          align: 'left'
        },
        {
          text: 'Artist',
          value: 'artist',
          align: 'left'
        }
      ],
      pagination: {
        sortBy: 'createdAt',
        descending: true
      },
      songs: []
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      this.songs = (await SongHistoryService.index()).data
    }
  }
}
</script>

<style>

</style>
