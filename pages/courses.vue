<template>
  <section class="section">
    <h3 class="title is-3 has-text-grey">Cursos</h3>

    <TileWrapper :items="courses" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

import TileWrapper from '~/components/Tile/TileWrapper.vue'

import { courses } from '~/data/courses'

export default Vue.extend({
  name: 'CoursesPage',
  components: {
    TileWrapper,
  },
  data: () => ({
    courses,
  }),
})
</script>
