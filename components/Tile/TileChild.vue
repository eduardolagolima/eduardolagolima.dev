<template>
  <article class="tile is-child notification is-primary">
    <p class="title">
      <span v-if="item.icon" class="icon is-medium">
        <i :class="item.icon"></i>
      </span>
      {{ item.title }}
    </p>

    <p v-if="item.subtitle" class="subtitle">
      {{ item.subtitle }}
    </p>

    <div class="content">
      <div v-if="item.tags" class="tags">
        <span
          v-for="(tag, key) of item.tags"
          :key="key"
          class="tag is-primary is-light"
        >
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
  </article>
</template>

<script setup lang="ts">
import { Item } from '~/types/item'

interface Props {
  item: Item
}

const { item } = defineProps<Props>()
</script>
