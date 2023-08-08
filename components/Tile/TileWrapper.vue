<template>
  <TileAncestor
    v-for="(chunk, index) in chunks"
    :key="index"
    :items="chunk"
    :items-per-row="itemsPerRow"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

import chunk from 'lodash.chunk'

import TileAncestor from '~/components/Tile/TileAncestor.vue'

import { Item } from '~/types/item'

export default defineComponent({
  components: {
    TileAncestor,
  },
  props: {
    items: {
      type: Array as PropType<Item[]>,
      required: true,
    },
    itemsPerRow: {
      type: Number,
      default: 2,
    },
  },
  computed: {
    chunks() {
      return chunk(this.items, this.itemsPerRow)
    },
  },
})
</script>
