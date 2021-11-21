<template>
  <section class="section">
    <h3 class="title is-3 has-text-grey">
      Experiência
    </h3>

    <div class="timeline is-centered">
      <header class="timeline-header">
        <span class="tag is-medium is-primary">{{
          new Date().getFullYear()
        }}</span>
      </header>

      <template v-for="(experience, key) of experiences">
        <div :key="`timeline-item-${key}`" class="timeline-item">
          <div class="timeline-marker" />
          <div class="timeline-content">
            <p class="heading">{{ experience.date }}</p>
            <p>{{ experience.event }}</p>
            <p class="company">{{ experience.company }}</p>
          </div>
        </div>
        <header
          v-if="
            typeof experiences[key + 1] !== 'undefined' &&
              experiences[key + 1]['year'] !== experience.year
          "
          :key="`timeline-header-${key}`"
          class="timeline-header"
        >
          <span class="tag is-primary">{{ experience.year }}</span>
        </header>
      </template>

      <div class="timeline-header">
        <span class="tag is-medium is-primary">2016</span>
      </div>
    </div>
  </section>
</template>

<script>
import experiences from '~/data/experiences.json'

export default {
  data: () => ({
    experiences
  })
}
</script>

<style scoped>
.company {
  margin-top: 5px;
  font-size: 0.75rem;
}
</style>
