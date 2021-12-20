<template>
  <section class="section">
    <h3 class="title is-3 has-text-grey">Eventos</h3>

    <TileWrapper :items="events" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

import TileWrapper from '~/components/Tile/TileWrapper.vue'

import { events } from '~/data/events'

export default Vue.extend({
  name: 'EventsPage',
  components: {
    TileWrapper,
  },
  data: () => ({
    events,
  }),
})
</script>
