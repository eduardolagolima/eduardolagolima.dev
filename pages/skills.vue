<template>
  <section class="section">
    <h3 class="title is-3 has-text-grey">Habilidades</h3>

    <TileWrapper :items="skills" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

import TileWrapper from '~/components/Tile/TileWrapper.vue'

import { skills } from '~/data/skills'

export default Vue.extend({
  name: 'SkillsPage',
  components: {
    TileWrapper,
  },
  data: () => ({
    skills,
  }),
})
</script>
