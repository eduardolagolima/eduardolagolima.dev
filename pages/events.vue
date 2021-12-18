<template>
  <section class="section">
    <h3 class="title is-3 has-text-grey">Eventos</h3>

    <TileWrapper :items="events" />
  </section>
</template>

<script>
import TileWrapper from '~/components/Tile/TileWrapper'

import { events } from '~/data/events'

export default {
  components: {
    TileWrapper,
  },
  data: () => ({
    events,
  }),
}
</script>
