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
      <p>Desenvolvedor na Atua Sistemas de Informação</p>
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
export default {
  layout: 'about',
  data: () => ({
    contacts: [
      {
        url: 'https://github.com/eduardolagolima',
        icon: 'github'
      },
      {
        url: 'https://www.linkedin.com/in/eduardolagolima/',
        icon: 'linkedin'
      },
      {
        url: 'mailto:eduardolagolima@gmail.com',
        icon: 'email'
      },
      {
        url: 'https://twitter.com/eduardolagolima',
        icon: 'twitter'
      },
      {
        url: 'https://instagram.com/eduardolagolima',
        icon: 'instagram'
      }
    ]
  })
}
</script>

<style scoped>
.content-centered {
  justify-content: center;
}
</style>
