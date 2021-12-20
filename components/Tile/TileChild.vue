<template>
  <article :class="['tile', 'is-child', 'notification', type]">
    <TileChildTitle :title="item.title" :icon="item.icon" />
    <TileChildSubtitle :subtitle="item.subtitle" />
    <TileChildContent :actions="item.actions" :tags="item.tags" />
  </article>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

import TileChildTitle from '~/components/Tile/TileChildTitle.vue'
import TileChildSubtitle from '~/components/Tile/TileChildSubtitle.vue'
import TileChildContent from '~/components/Tile/TileChildContent.vue'

import { Item } from '~/types/item'

export default Vue.extend({
  components: {
    TileChildSubtitle,
    TileChildTitle,
    TileChildContent,
  },
  props: {
    item: {
      type: Object,
      required: true,
    } as PropOptions<Item>,
    type: {
      type: String,
      required: true,
    },
  },
})
</script>
