<template>
  <section class="section">
    <h3 class="title is-3 has-text-grey">Habilidades</h3>

    <TileWrapper :items="skills" />
  </section>
</template>

<script setup lang="ts">
import { skills } from '~/data/skills'
</script>
