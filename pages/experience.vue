<template>
  <section class="section">
    <h3 class="title is-3 has-text-grey">Experiência</h3>

    <div class="timeline is-centered">
      <header class="timeline-header">
        <span class="tag is-medium is-primary">{{
          new Date().getFullYear()
        }}</span>
      </header>

      <div
        v-for="(experience, key) of experiences"
        :key="key"
        class="timeline-item"
      >
        <div class="timeline-marker" />
        <div class="timeline-content">
          <p class="heading">{{ experience.when }}</p>
          <p>{{ experience.role }}</p>
          <p class="company">{{ experience.company }}</p>
        </div>
      </div>

      <div class="timeline-header">
        <span class="tag is-medium is-primary">2016</span>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

import { experiences } from '~/data/experiences'

export default Vue.extend({
  name: 'ExperiencePage',
  data: () => ({
    experiences,
  }),
})
</script>

<style scoped>
.company {
  margin-top: 5px;
  font-size: 0.75rem;
}
</style>
