<template>
  <section class="section">
    <div class="is-flex is-justify-content-center">
      <figure class="image is-128x128">
        <img
          class="is-rounded"
          src="~/assets/images/avatar.jpg"
          alt="Eduardo Lago Lima"
        />
      </figure>
    </div>
    <div class="column has-text-centered">
      <p>{{ currentJob | formatExperience }}</p>
      <p>{{ graduation | formatExperience }}</p>
      <p>Passo Fundo/RS</p>
    </div>
    <div class="is-flex is-justify-content-center">
      <template v-for="({ url, icon }, key) of contacts">
        <a :key="key" target="_blank" :href="url">
          <b-icon :icon="icon" size="is-large" type="is-primary" />
        </a>
      </template>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

import { experiences } from '~/data/experiences'
import { contacts } from '~/data/contacts'
import { Experience } from '~/types/experience'

export default Vue.extend({
  name: 'AboutPage',
  filters: {
    formatExperience(experience: Experience | undefined) {
      return experience ? `${experience.role} - ${experience.company}` : ''
    },
  },
  layout: 'about',
  data: () => ({
    contacts,
  }),
  computed: {
    currentJob() {
      return experiences.find(({ currentJob }) => currentJob)
    },
    graduation() {
      return experiences.find(({ graduation }) => graduation)
    },
  },
})
</script>
