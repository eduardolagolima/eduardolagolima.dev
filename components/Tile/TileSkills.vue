<template>
  <article class="tile is-child notification">
    <p class="title">{{ title }}</p>
    <div class="content">
      <b-taglist>
        <b-tag
          v-for="(skill, key) of skills"
          :key="key"
          type="is-primary"
          size="is-medium"
        >
          {{ skill }}
        </b-tag>
      </b-taglist>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    skills: {
      type: Array,
      required: true,
    },
  },
}
</script>
