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

<script>
import ActionButton from '../Button/ActionButton'

export default {
  components: {
    ActionButton,
  },
  props: {
    actions: {
      type: Array,
      required: true,
    },
  },
}
</script>
