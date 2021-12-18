<template>
  <p v-if="subtitle" class="subtitle">
    {{ subtitle }}
  </p>
</template>

<script>
export default {
  props: {
    subtitle: {
      type: String,
      default: null,
    },
  },
}
</script>
