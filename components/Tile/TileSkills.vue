<template>
  <article class="tile is-child notification">
    <p class="title">{{ title }}</p>
    <div class="content">
      <b-progress
        v-for="(skill, key) of skills"
        :key="key"
        size="is-large"
        :type="skill.colorType"
        :value="skill.value"
        show-value
      >
        {{ skill.name }}
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
