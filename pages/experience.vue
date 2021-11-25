<template>
  <section class="section">
    <h3 class="title is-3 has-text-grey">
      Experiência
    </h3>

    <div class="timeline is-centered">
      <header class="timeline-header">
        <span class="tag is-medium is-primary">{{ currentYear }}</span>
      </header>

      <div
        v-for="(experience, key) of experiences"
        :key="key"
        class="timeline-item"
      >
        <div class="timeline-marker" />
        <div class="timeline-content">
          <p class="heading">{{ experience.date | formatDate }}</p>
          <p>{{ experience.role }}</p>
          <p class="company">{{ experience.company }}</p>
        </div>
      </div>

      <div class="timeline-header">
        <span class="tag is-medium is-primary">{{ initialYear }}</span>
      </div>
    </div>
  </section>
</template>

<script>
import dayjs from 'dayjs'

import { experiences } from '~/data/experiences'

const years = experiences.map(({ date }) => date.year())
const initialYear = Math.min(...years)
const currentYear = dayjs().year()

export default {
  filters: {
    formatDate(date) {
      return date.format('MMMM [de] YYYY')
    }
  },
  data: () => ({
    experiences,
    initialYear,
    currentYear
  })
}
</script>

<style scoped>
.company {
  margin-top: 5px;
  font-size: 0.75rem;
}
</style>
