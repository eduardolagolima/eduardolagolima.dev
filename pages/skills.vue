<template>
  <section class="section">
    <h3 class="title is-3 has-text-grey">
      Habilidades
    </h3>

    <div class="tile is-ancestor">
      <div class="tile is-vertical is-parent">
        <TileSkills title="Backend" :skills="skills.backend" />
        <TileSkills title="Database" :skills="skills.database" />
        <TileSkills title="Devops" :skills="skills.devops" />
      </div>
      <div class="tile is-vertical is-parent">
        <TileSkills title="Frontend" :skills="skills.frontend" />
        <TileSkills title="Outras" :skills="skills.others" />
      </div>
    </div>
  </section>
</template>

<script>
import TileSkills from '~/components/Tile/TileSkills'

import { skills } from '~/data/skills'

export default {
  components: {
    TileSkills
  },
  data: () => ({
    skills
  })
}
</script>
