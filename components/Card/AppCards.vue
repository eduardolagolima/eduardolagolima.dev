<template>
  <div class="fixed-grid has-2-cols has-1-cols-mobile">
    <div class="grid">
      <div v-for="(item, index) in items" :key="index" class="cell">
        <AppCard :key="index" :item="item" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Item } from '~/types/item'

interface Props {
  items: Item[]
}

const { items } = defineProps<Props>()
</script>
