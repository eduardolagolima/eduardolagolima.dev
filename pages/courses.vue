<template>
  <section class="section">
    <h3 class="title is-3 has-text-grey">
      Cursos
    </h3>

    <div class="tile is-ancestor">
      <div class="tile is-parent is-6">
        <TileCourse :course="courses.cssFlexbox" color-type="is-info" />
      </div>
    </div>
  </section>
</template>

<script>
import TileCourse from '~/components/Tile/TileCourse'

import courses from '~/data/courses.json'

export default {
  components: {
    TileCourse
  },
  data: () => ({
    courses
  })
}
</script>
