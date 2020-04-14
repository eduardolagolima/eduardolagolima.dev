<template>
  <section class="section">
    <h3 class="title is-3 has-text-grey">
      Habilidades
    </h3>

    <div class="tile is-ancestor">
      <div class="tile is-vertical is-parent">
        <TileSkills title="Backend" :skills="skills.backend" />
        <TileSkills title="Database" :skills="skills.database" />
        <TileSkills title="Devops" :skills="skills.devops" />
      </div>
      <div class="tile is-vertical is-parent">
        <TileSkills title="Frontend" :skills="skills.frontend" />
        <TileSkills title="Outras" :skills="skills.others" />
      </div>
    </div>
  </section>
</template>

<script>
import TileSkills from '~/components/Tile/TileSkills'

export default {
  components: {
    TileSkills
  },
  data: () => ({
    skills: {
      backend: [
        {
          name: 'PHP',
          value: 90,
          colorType: 'is-primary'
        },
        {
          name: 'Laravel',
          value: 70,
          colorType: 'is-danger'
        },
        {
          name: 'Node.js',
          value: 60,
          colorType: 'is-success'
        },
        {
          name: 'Express.js',
          value: 60,
          colorType: 'is-darkgrey'
        }
      ],
      database: [
        {
          name: 'PostgreSQL',
          value: 90,
          colorType: 'is-info'
        },
        {
          name: 'MongoDB',
          value: 60,
          colorType: 'is-success'
        }
      ],
      devops: [
        {
          name: 'Docker',
          value: 70,
          colorType: 'is-info'
        },
        {
          name: 'Shell Script',
          value: 60,
          colorType: 'is-darkgrey'
        }
      ],
      frontend: [
        {
          name: 'Javascript',
          value: 90,
          colorType: 'is-warning'
        },
        {
          name: 'Vue.js',
          value: 80,
          colorType: 'is-success'
        },
        {
          name: 'React.js',
          value: 60,
          colorType: 'is-info'
        },
        {
          name: 'HTML',
          value: 90,
          colorType: 'is-danger'
        },
        {
          name: 'CSS',
          value: 80,
          colorType: 'is-info'
        }
      ],
      others: [
        {
          name: 'Linux',
          value: 80,
          colorType: 'is-darkgrey'
        },
        {
          name: 'Metodologia Kanban',
          value: 70,
          colorType: 'is-danger'
        },
        {
          name: 'Git',
          value: 70,
          colorType: 'is-darkgrey'
        },
        {
          name: 'React Native',
          value: 30,
          colorType: 'is-info'
        }
      ]
    }
  })
}
</script>
