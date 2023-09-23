<template>
  <TileAncestor
    v-for="(chunk, index) in chunks"
    :key="index"
    :items="chunk"
    :items-per-row="itemsPerRow"
  />
</template>

<script setup lang="ts">
import chunk from 'lodash.chunk'

import { Item } from '~/types/item'

interface Props {
  items: Item[]
  itemsPerRow?: number
}

const { items, itemsPerRow } = withDefaults(defineProps<Props>(), {
  itemsPerRow: 2,
})

const chunks = computed(() => {
  return chunk(items, itemsPerRow)
})
</script>
