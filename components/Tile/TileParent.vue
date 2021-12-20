<template>
  <div :class="['tile', 'is-parent', horizontalSize]">
    <TileChild :item="item" :type="type" />
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

import TileChild from '~/components/Tile/TileChild.vue'

import { Item } from '~/types/item'

const COLUMNS = 12

export default Vue.extend({
  components: {
    TileChild,
  },
  props: {
    item: {
      type: Object,
      required: true,
    } as PropOptions<Item>,
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
    horizontalSize(): string {
      return `is-${COLUMNS / this.itemsPerRow}`
    },
  },
})
</script>
