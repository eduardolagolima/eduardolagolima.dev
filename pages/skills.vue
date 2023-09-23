<template>
  <section class="section">
    <h3 class="title is-3 has-text-grey">Habilidades</h3>

    <TileWrapper :items="skills" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { skills } from '~/data/skills'

export default defineComponent({
  name: 'SkillsPage',
  data: () => ({
    skills,
  }),
})
</script>
