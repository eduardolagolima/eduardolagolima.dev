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
      <p>{{ formatExperience(currentJob) }}</p>
      <p>{{ formatExperience(graduation) }}</p>
      <p>Passo Fundo/RS</p>
    </div>
    <div class="is-flex is-justify-content-center">
      <template v-for="{ url, icon } of contacts" :key="url">
        <a target="_blank" :href="url">
          <span class="icon is-large has-text-primary">
            <i :class="icon"></i>
          </span>
        </a>
      </template>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { experiences } from '~/data/experiences'
import { contacts } from '~/data/contacts'
import { Experience } from '~/types/experience'

definePageMeta({ layout: 'about' })

export default defineComponent({
  name: 'AboutPage',
  data: () => ({
    contacts,
  }),
  computed: {
    currentJob() {
      return experiences.find(({ currentJob }) => currentJob)!
    },
    graduation() {
      return experiences.find(({ graduation }) => graduation)!
    },
  },
  methods: {
    formatExperience({ role, company }: Experience) {
      return `${role} - ${company}`
    },
  },
})
</script>
