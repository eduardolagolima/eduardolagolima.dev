<template>
  <div class="buttons">
    <ActionButton
      v-for="(action, key) of actions"
      :key="key"
      :icon="action.icon"
      :label="action.label"
      :url="action.url"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

import ActionButton from '~/components/Button/ActionButton.vue'

import { Action } from '~/types/action'

export default Vue.extend({
  components: {
    ActionButton,
  },
  props: {
    actions: {
      type: Array,
      required: true,
    } as PropOptions<Action[]>,
  },
})
</script>
