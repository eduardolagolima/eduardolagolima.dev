<template>
  <section class="section">
    <h3 class="title is-3 has-text-grey">
      Projetos
    </h3>

    <div class="tile is-ancestor">
      <div class="tile is-vertical is-parent">
        <TileProject :project="projects.personalWebSite" />
        <TileProject :project="projects.gymWorkout" />
      </div>
      <div class="tile is-vertical is-parent">
        <TileProject :project="projects.devRadar" />
        <TileProject :project="projects.beTheHero" />
      </div>
    </div>
  </section>
</template>

<script>
import TileProject from '~/components/Tile/TileProject'

export default {
  components: {
    TileProject
  },
  data: () => ({
    projects: {
      personalWebSite: {
        name: 'eduardolagolima.dev',
        description: 'Este site que você está usando :)',
        urlGithub: 'https://github.com/eduardolagolima/eduardolagolima.dev',
        urlProduction: 'https://eduardolagolima.dev/',
        type: 'is-info',
        techs: ['Vue.js', 'Nuxt.js', 'Buefy']
      },
      gymWorkout: {
        name: 'gym-workout',
        description: 'Sistema para controlar treinos de musculação.',
        urlGithub: 'https://github.com/eduardolagolima/gym-workout',
        urlProduction: null,
        type: 'is-success',
        techs: [
          'Express.js',
          'MongoDB',
          'Mongoose',
          'JWT',
          'Axios',
          'Vuetify',
          'Vue.js',
          'Vue Router',
          'Vuex',
          'Chart.js',
          'Day.js'
        ]
      },
      devRadar: {
        name: 'dev-radar',
        description:
          'Projeto desenvolvido durante a Semana OmniStack 10.0 da Rocketseat.',
        urlGithub: 'https://github.com/eduardolagolima/dev-radar',
        urlProduction: null,
        type: 'is-primary',
        techs: [
          'Express.js',
          'MongoDB',
          'Mongoose',
          'Axios',
          'Socket.io',
          'React.js',
          'React Native',
          'Expo'
        ]
      },
      beTheHero: {
        name: 'be-the-hero',
        description:
          'Projeto desenvolvido durante a Semana OmniStack 11.0 da Rocketseat.',
        urlGithub: 'https://github.com/eduardolagolima/be-the-hero',
        urlProduction: null,
        type: 'is-danger',
        techs: [
          'Express.js',
          'SQLite',
          'Knex',
          'Jest',
          'Axios',
          'React.js',
          'React Native',
          'Expo'
        ]
      }
    }
  })
}
</script>
