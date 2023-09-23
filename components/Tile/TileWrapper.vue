<template>
  <TileAncestor
    v-for="(chunkedItem, index) in chunkedItems"
    :key="index"
    :items="chunkedItem"
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

const chunkedItems = chunk(items, itemsPerRow)
</script>
