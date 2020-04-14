<template>
  <b-navbar type="is-primary">
    <template slot="brand">
      <b-navbar-item tag="nuxt-link" :to="{ path: '/' }">
        Eduardo Lago Lima
      </b-navbar-item>
    </template>

    <template slot="end">
      <template v-for="({ to, description }, key) of headerItems">
        <HeaderItem :key="key" :to="to" :description="description" />
      </template>
    </template>
  </b-navbar>
</template>

<script>
import HeaderItem from '~/components/Header/HeaderItem'

export default {
  components: {
    HeaderItem
  },
  data: () => ({
    headerItems: [
      {
        to: 'index',
        description: 'Sobre'
      },
      {
        to: 'skills',
        description: 'Habilidades'
      },
      {
        to: 'experience',
        description: 'Experiência'
      },
      {
        to: 'projects',
        description: 'Projetos'
      },
      {
        to: 'courses-events',
        description: 'Cursos e Eventos'
      }
    ]
  })
}
</script>
