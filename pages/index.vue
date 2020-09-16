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
      <p>Desenvolvedor na UOL EdTech</p>
      <p>Bacharelado, Sistemas de Informação, IMED</p>
      <p>Passo Fundo/RS</p>
    </div>
    <div class="is-flex content-centered">
      <template v-for="({ url, icon }, key) of contacts">
        <a :key="key" target="_blank" :href="url">
          <b-icon :icon="icon" size="is-large" type="is-primary"> </b-icon>
        </a>
      </template>
    </div>
  </section>
</template>

<script>
import contacts from '~/data/contacts.json'

export default {
  layout: 'about',
  data: () => ({
    contacts
  })
}
</script>

<style scoped>
.content-centered {
  justify-content: center;
}
</style>
