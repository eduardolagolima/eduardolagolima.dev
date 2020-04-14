<template>
  <section class="section">
    <h3 class="title is-3 has-text-grey">
      Cursos
    </h3>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <TileCourse
          :course="courses.semanaOmnistack11"
          color-type="is-primary"
        />
      </div>
      <div class="tile is-parent">
        <TileCourse
          :course="courses.semanaOmnistack10"
          color-type="is-success"
        />
      </div>
      <div class="tile is-parent">
        <TileCourse :course="courses.cssFlexbox" color-type="is-info" />
      </div>
    </div>

    <hr />

    <h3 class="title is-3 has-text-grey">
      Eventos
    </h3>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <TileEvent :event="events.pgConfBrazil2019" color-type="is-info" />
      </div>
      <div class="tile is-parent">
        <TileEvent :event="events.phpExperience2019" color-type="is-primary" />
      </div>
      <div class="tile is-parent">
        <TileEvent :event="events.brazilJSConf2017" color-type="is-warning" />
      </div>
    </div>
  </section>
</template>

<script>
import TileCourse from '~/components/Tile/TileCourse'
import TileEvent from '~/components/Tile/TileEvent'

import courses from '~/data/courses.json'
import events from '~/data/events.json'

export default {
  components: {
    TileCourse,
    TileEvent
  },
  data: () => ({
    courses,
    events
  })
}
</script>
