<template>
  <article class="tile is-child notification is-primary">
    <p class="title">
      <b-icon v-if="item.icon" :icon="item.icon" size="is-medium" />
      {{ item.title }}
    </p>

    <p v-if="item.subtitle" class="subtitle">
      {{ item.subtitle }}
    </p>

    <div class="content">
      <b-taglist v-if="item.tags">
        <b-tag
          v-for="(tag, key) of item.tags"
          :key="key"
          size="is-small"
          type="is-primary is-light"
        >
          # {{ tag }}
        </b-tag>
      </b-taglist>

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
import Vue, { PropOptions } from 'vue'

import ActionButton from '~/components/Button/ActionButton.vue'

import { Item } from '~/types/item'

export default Vue.extend({
  components: {
    ActionButton,
  },
  props: {
    item: {
      type: Object,
      required: true,
    } as PropOptions<Item>,
  },
})
</script>
