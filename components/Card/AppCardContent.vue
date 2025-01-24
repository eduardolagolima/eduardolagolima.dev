<template>
  <div class="content">
    <div v-if="item.tags" class="tags">
      <span v-for="(tag, key) of item.tags" :key="key" class="tag">
        # {{ tag }}
      </span>
    </div>

    <div v-if="item.actions" class="buttons">
      <AppButton
        v-for="(action, key) of item.actions"
        :key="key"
        :icon="action.icon"
        :label="action.label"
        :url="action.url"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Item } from '~/types/item'

interface Props {
  item: Item
}

const { item } = defineProps<Props>()
</script>
