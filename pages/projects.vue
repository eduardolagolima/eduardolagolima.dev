<template>
  <section class="section">
    <h3 class="title is-3 has-text-grey">Projetos</h3>

    <TileWrapper :items="projects" />
  </section>
</template>

<script>
import TileWrapper from '~/components/Tile/TileWrapper'

import { projects } from '~/data/projects'

export default {
  name: 'ProjectsPage',
  components: {
    TileWrapper,
  },
  data: () => ({
    projects,
  }),
}
</script>
