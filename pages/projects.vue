<template>
  <section class="section">
    <h3 class="title is-3 has-text-grey">
      Projetos
    </h3>

    <Tiles :items="projects" />
  </section>
</template>

<script>
import Tiles from '~/components/Tile/Tiles'

import { projects } from '~/data/projects'

export default {
  components: {
    Tiles
  },
  data: () => ({
    projects
  })
}
</script>
