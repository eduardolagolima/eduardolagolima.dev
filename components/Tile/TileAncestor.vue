<template>
  <div class="tile is-ancestor">
    <TileParent
      v-for="(item, index) in items"
      :key="index"
      :items-per-row="itemsPerRow"
      :item="item"
      :type="type"
    />
  </div>
</template>

<script>
import TileParent from './TileParent'

export default {
  components: {
    TileParent,
  },
  props: {
    items: {
      type: Array,
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
}
</script>
