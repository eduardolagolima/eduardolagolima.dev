<template>
  <section class="section">
    <h3 class="title is-3 has-text-grey">Eventos</h3>

    <Tiles :items="events" />
  </section>
</template>

<script>
import Tiles from '~/components/Tile/Tiles'

import { events } from '~/data/events'

export default {
  components: {
    Tiles,
  },
  data: () => ({
    events,
  }),
}
</script>
