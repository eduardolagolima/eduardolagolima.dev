<template>
  <section class="section">
    <h3 class="title is-3 has-text-grey">Habilidades</h3>

    <TileWrapper :items="skills" />
  </section>
</template>

<script>
import TileWrapper from '~/components/Tile/TileWrapper'

import { skills } from '~/data/skills'

export default {
  components: {
    TileWrapper,
  },
  data: () => ({
    skills,
  }),
}
</script>
