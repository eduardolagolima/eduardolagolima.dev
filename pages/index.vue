<template>
  <section class="section">
    <div class="is-flex content-centered">
      <figure class="image is-128x128">
        <img
          class="is-rounded"
          src="~/assets/images/avatar.jpg"
          alt="Eduardo Lago Lima"
        />
      </figure>
    </div>
    <div class="column has-text-centered">
      <p>{{ currentJob }}</p>
      <p>{{ graduation }}</p>
      <p>Passo Fundo/RS</p>
    </div>
    <div class="is-flex content-centered">
      <template v-for="({ url, icon }, key) of contacts">
        <a :key="key" target="_blank" :href="url">
          <b-icon :icon="icon" size="is-large" type="is-primary" />
        </a>
      </template>
    </div>
  </section>
</template>

<script>
import { experiences } from '~/data/experiences'
import { contacts } from '~/data/contacts'

export default {
  layout: 'about',
  data: () => ({
    contacts
  }),
  computed: {
    currentJob() {
      const { role, company } = experiences.find(({ currentJob }) => currentJob)
      return `${role} - ${company}`
    },
    graduation() {
      const { role, company } = experiences.find(({ graduation }) => graduation)
      return `${role} - ${company}`
    }
  }
}
</script>

<style scoped>
.content-centered {
  justify-content: center;
}
</style>
