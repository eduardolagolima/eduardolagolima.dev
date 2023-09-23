<template>
  <section class="section">
    <h3 class="title is-3 has-text-grey">Eventos</h3>

    <TileWrapper :items="events" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { events } from '~/data/events'

export default defineComponent({
  name: 'EventsPage',
  data: () => ({
    events,
  }),
})
</script>
