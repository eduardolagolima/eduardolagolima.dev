<template>
  <section class="section">
    <h3 class="title is-3 has-text-grey">
      Projetos
    </h3>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <TileProject
          :project="projects.personalWebSite"
          color-type="is-primary"
        />
      </div>
      <div class="tile is-parent">
        <TileProject :project="projects.devRadar" color-type="is-success" />
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <TileProject :project="projects.gymWorkout" color-type="is-dark" />
      </div>
      <div class="tile is-parent">
        <TileProject :project="projects.beTheHero" color-type="is-danger" />
      </div>
    </div>
  </section>
</template>

<script>
import TileProject from '~/components/Tile/TileProject'

import projects from '~/data/projects.json'

export default {
  components: {
    TileProject
  },
  data: () => ({
    projects
  })
}
</script>
