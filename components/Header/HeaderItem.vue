<template>
  <b-navbar-item
    exact-active-class="is-active"
    tag="nuxt-link"
    :to="{ name: to }"
  >
    {{ description }}
  </b-navbar-item>
</template>

<script>
export default {
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
}
</script>
