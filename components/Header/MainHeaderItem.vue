<template>
  <b-navbar-item
    exact-active-class="is-active"
    tag="nuxt-link"
    :to="{ name: to }"
  >
    {{ description }}
  </b-navbar-item>
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
