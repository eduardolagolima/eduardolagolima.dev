<template>
  <section class="section">
    <h3 class="title is-3 has-text-grey">Projetos</h3>

    <AppCards :items="projects" />
  </section>
</template>

<script setup lang="ts">
import { projects } from '~/data/projects'
</script>
