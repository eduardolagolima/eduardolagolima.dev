<template>
  <p v-if="subtitle" class="subtitle">
    {{ subtitle }}
  </p>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    subtitle: {
      type: String,
      default: null,
    },
  },
})
</script>
