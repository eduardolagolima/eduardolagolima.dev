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
import Vue, { PropOptions } from 'vue'

import TileParent from '~/components/Tile/TileParent.vue'

import { Item } from '~/types/item'

export default Vue.extend({
  components: {
    TileParent,
  },
  props: {
    items: {
      type: Array,
      required: true,
    } as PropOptions<Item[]>,
    itemsPerRow: {
      type: Number,
      required: true,
    },
  },
})
</script>
