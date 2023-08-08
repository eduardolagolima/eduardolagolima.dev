<template>
  <div :class="['tile', 'is-parent', horizontalSize]">
    <TileChild :item="item" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

import TileChild from '~/components/Tile/TileChild.vue'

import { Item } from '~/types/item'

const COLUMNS = 12

export default defineComponent({
  components: {
    TileChild,
  },
  props: {
    item: {
      type: Object as PropType<Item>,
      required: true,
    },
    itemsPerRow: {
      type: Number,
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
