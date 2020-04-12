<template>
  <article class="tile is-child notification">
    <p class="title">{{ title }}</p>
    <div class="content">
      <b-progress
        v-for="({ name, value, type }, key) of skills"
        :key="key"
        size="is-large"
        :type="type"
        :value="value"
        show-value
      >
        {{ name }}
      </b-progress>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    skills: {
      type: Array,
      required: true
    }
  }
}
</script>

<style></style>
