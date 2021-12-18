<template>
  <b-taglist>
    <b-tag
      v-for="(tag, key) of tags"
      :key="key"
      size="is-small"
      type="is-primary is-light"
    >
      # {{ tag }}
    </b-tag>
  </b-taglist>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true,
    },
  },
}
</script>
