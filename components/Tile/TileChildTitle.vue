<template>
  <p class="title">
    <b-icon v-if="icon" :icon="icon" size="is-medium" />
    {{ title }}
  </p>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    icon: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      required: true,
    },
  },
})
</script>
