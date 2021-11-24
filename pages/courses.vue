<template>
  <section class="section">
    <h3 class="title is-3 has-text-grey">
      Cursos
    </h3>

    <Tiles :items="courses" />
  </section>
</template>

<script>
import Tiles from '~/components/Tile/Tiles'

import courses from '~/data/courses.json'

export default {
  components: {
    Tiles
  },
  data: () => ({
    courses
  })
}
</script>
