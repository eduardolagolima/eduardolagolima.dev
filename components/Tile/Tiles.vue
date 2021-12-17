<template>
  <div>
    <div
      v-for="(chunk, chunkIndex) in chunkedItems"
      :key="chunkIndex"
      class="tile is-ancestor"
    >
      <div
        v-for="(item, itemIndex) in chunk"
        :key="itemIndex"
        class="tile is-parent"
        :class="`is-${columns / itemsPerRow}`"
      >
        <Tile :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import chunk from 'lodash/chunk'

import Tile from './Tile'

export default {
  components: {
    Tile,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    columns: 12,
    itemsPerRow: 2,
  }),
  computed: {
    chunkedItems() {
      return chunk(this.items, this.itemsPerRow)
    },
  },
}
</script>
