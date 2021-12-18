<template>
  <div :class="['tile', 'is-parent', horizontalSize]">
    <TileChild :item="item" :type="type" />
  </div>
</template>

<script>
import TileChild from './TileChild'

const COLUMNS = 12

export default {
  components: {
    TileChild,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    itemsPerRow: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    horizontalSize() {
      return `is-${COLUMNS / this.itemsPerRow}`
    },
  },
}
</script>
