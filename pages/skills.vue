<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">
      Habilidades
    </h2>

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
          type: 'is-primary'
        },
        {
          name: 'Laravel',
          value: 70,
          type: 'is-danger'
        },
        {
          name: 'Node.js',
          value: 70,
          type: 'is-success'
        },
        {
          name: 'Express.js',
          value: 70,
          type: 'is-darkgrey'
        }
      ],
      database: [
        {
          name: 'PostgreSQL',
          value: 90,
          type: 'is-info'
        },
        {
          name: 'MongoDB',
          value: 60,
          type: 'is-success'
        }
      ],
      frontend: [
        {
          name: 'Javascript',
          value: 90,
          type: 'is-warning',
          color: '#000'
        },
        {
          name: 'Vue.js',
          value: 80,
          type: 'is-success'
        },
        {
          name: 'React.js',
          value: 60,
          type: 'is-info'
        },
        {
          name: 'HTML',
          value: 80,
          type: 'is-danger'
        },
        {
          name: 'CSS',
          value: 80,
          type: 'is-info'
        }
      ],
      devops: [
        {
          name: 'Docker',
          value: 70,
          type: 'is-info'
        },
        {
          name: 'Shell Script',
          value: 60,
          type: 'is-darkgrey'
        }
      ],
      others: [
        {
          name: 'Linux',
          value: 70,
          type: 'is-darkgrey'
        },
        {
          name: 'Metodologia Kanban',
          value: 70,
          type: 'is-danger'
        },
        {
          name: 'Git',
          value: 70,
          type: 'is-darkgrey'
        },
        {
          name: 'React Native',
          value: 30,
          type: 'is-info'
        }
      ]
    }
  })
}
</script>
