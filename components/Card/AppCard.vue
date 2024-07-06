<template>
  <article class="box">
    <p class="title">
      <span v-if="item.icon" class="icon is-medium">
        <i :class="item.icon"></i>
      </span>
      {{ item.title }}
    </p>

    <p v-if="item.subtitle" class="subtitle">
      {{ item.subtitle }}
    </p>

    <AppCardContent :item="item" />
  </article>
</template>

<script setup lang="ts">
import { Item } from '~/types/item'

interface Props {
  item: Item
}

const { item } = defineProps<Props>()
</script>
