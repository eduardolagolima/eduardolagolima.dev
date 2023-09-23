<template>
  <div :class="['tile', 'is-parent', horizontalSize]">
    <TileChild :item="item" />
  </div>
</template>

<script setup lang="ts">
import { Item } from '~/types/item'

interface Props {
  item: Item
  itemsPerRow: number
}

const { item, itemsPerRow } = defineProps<Props>()

const COLUMNS = 12
const horizontalSize = `is-${COLUMNS / itemsPerRow}`
</script>
