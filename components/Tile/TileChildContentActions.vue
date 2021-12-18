<template>
  <div class="buttons">
    <Button
      v-for="(action, key) of actions"
      :key="key"
      :icon="action.icon"
      :label="action.label"
      :url="action.url"
    />
  </div>
</template>

<script>
import Button from '../Button/Button'

export default {
  components: {
    Button,
  },
  props: {
    actions: {
      type: Array,
      required: true,
    },
  },
}
</script>
