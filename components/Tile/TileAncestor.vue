<template>
  <div class="tile is-ancestor">
    <TileParent
      v-for="(item, index) in items"
      :key="index"
      :items-per-row="itemsPerRow"
      :item="item"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

import { Item } from '~/types/item'

export default defineComponent({
  props: {
    items: {
      type: Array as PropType<Item[]>,
      required: true,
    },
    itemsPerRow: {
      type: Number,
      required: true,
    },
  },
})
</script>
