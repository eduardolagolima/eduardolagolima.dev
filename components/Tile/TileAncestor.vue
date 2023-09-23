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

<script setup lang="ts">
import { Item } from '~/types/item'

interface Props {
  items: Item[]
  itemsPerRow: number
}

const { items, itemsPerRow } = defineProps<Props>()
</script>
