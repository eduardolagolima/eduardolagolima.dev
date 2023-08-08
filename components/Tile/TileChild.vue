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
        <ActionButton
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

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

import ActionButton from '~/components/Button/ActionButton.vue'

import { Item } from '~/types/item'

export default defineComponent({
  components: {
    ActionButton,
  },
  props: {
    item: {
      type: Object as PropType<Item>,
      required: true,
    },
  },
})
</script>
