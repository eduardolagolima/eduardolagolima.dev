<template>
  <section class="section">
    <h3 class="title is-3 has-text-grey">Cursos</h3>

    <TileWrapper :items="courses" />
  </section>
</template>

<script setup lang="ts">
import { courses } from '~/data/courses'
</script>
