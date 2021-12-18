<template>
  <section class="section">
    <h3 class="title is-3 has-text-grey">Cursos</h3>

    <TileWrapper :items="courses" />
  </section>
</template>

<script>
import TileWrapper from '~/components/Tile/TileWrapper'

import { courses } from '~/data/courses'

export default {
  components: {
    TileWrapper,
  },
  data: () => ({
    courses,
  }),
}
</script>
