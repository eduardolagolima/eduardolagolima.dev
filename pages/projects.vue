<template>
  <section class="section">
    <h3 class="title is-3 has-text-grey">Projetos</h3>

    <TileWrapper :items="projects" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

import TileWrapper from '~/components/Tile/TileWrapper.vue'

import { projects } from '~/data/projects'

export default Vue.extend({
  name: 'ProjectsPage',
  components: {
    TileWrapper,
  },
  data: () => ({
    projects,
  }),
})
</script>
