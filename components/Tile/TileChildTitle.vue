<template>
  <p class="title">
    <b-icon v-if="icon" :icon="icon" size="is-medium" />
    {{ title }}
  </p>
</template>

<script>
export default {
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
}
</script>
