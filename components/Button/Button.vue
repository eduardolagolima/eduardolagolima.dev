<template>
  <b-button
    v-if="url"
    target="_blank"
    :href="url"
    tag="a"
    type="is-primary"
    inverted
    outlined
    :icon-right="icon"
  >
    {{ label }}
  </b-button>
</template>

<script>
export default {
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
}
</script>
