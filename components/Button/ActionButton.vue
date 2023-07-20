<template>
  <a class="button is-primary is-inverted is-outlined" target="_blank" :href="url">
    <span>{{ label }}</span>
    <span class="icon is-small">
      <i :class="icon"></i>
    </span>
  </a>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    icon: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      default: null,
    },
  },
})
</script>
