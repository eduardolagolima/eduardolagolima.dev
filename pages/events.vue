<template>
  <section class="section">
    <h3 class="title is-3 has-text-grey">
      Eventos
    </h3>

    <div class="columns">
      <div v-for="(event, key) of events" :key="key" class="column">
        <CardEvent :event="event" />
      </div>
    </div>
  </section>
</template>

<script>
import CardEvent from '~/components/Card/CardEvent'

export default {
  components: {
    CardEvent
  },
  data: () => ({
    events: [
      {
        name: 'PGConf Brasil 2019',
        location: 'São Paulo/SP',
        duration: '02 e 03 de Agosto de 2019',
        hours: 16
      },
      {
        name: 'PHP Experience 2019',
        location: 'São Paulo/SP',
        duration: '05 e 06 de abril de 2019',
        hours: 12
      },
      {
        name: 'BrazilJS Conf 2017',
        location: 'Porto Alegre/RS',
        duration: '25 e 26 de Agosto de 2017',
        hours: 16
      },
      {
        name: 'FISL 16',
        location: 'Porto Alegre/RS',
        duration: '08 a 11 de julho de 2015',
        hours: 40
      }
    ]
  })
}
</script>
