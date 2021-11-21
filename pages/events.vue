<template>
  <section class="section">
    <h3 class="title is-3 has-text-grey">
      Eventos
    </h3>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <TileEvent :event="events.semanaOmnistack11" />
      </div>
      <div class="tile is-parent">
        <TileEvent :event="events.pgConfBrazil2019" />
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <TileEvent :event="events.phpExperience2019" />
      </div>
      <div class="tile is-parent">
        <TileEvent :event="events.brazilJSConf2017" />
      </div>
    </div>
  </section>
</template>

<script>
import TileEvent from '~/components/Tile/TileEvent'

import events from '~/data/events.json'

export default {
  components: {
    TileEvent
  },
  data: () => ({
    events
  })
}
</script>
