<template>
  <NuxtLink exact-active-class="is-active" class="navbar-item" :to="to">
    {{ description }}
  </NuxtLink>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    to: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
})
</script>
