<template>
  <section class="section">
    <h3 class="title is-3 has-text-grey">Cursos</h3>

    <TileWrapper :items="courses" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { courses } from '~/data/courses'

export default defineComponent({
  name: 'CoursesPage',
  data: () => ({
    courses,
  }),
})
</script>
