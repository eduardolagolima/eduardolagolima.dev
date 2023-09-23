<template>
  <section class="section">
    <h3 class="title is-3 has-text-grey">Eventos</h3>

    <TileWrapper :items="events" />
  </section>
</template>

<script setup lang="ts">
import { events } from '~/data/events'
</script>
