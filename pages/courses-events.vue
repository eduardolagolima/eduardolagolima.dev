<template>
  <section class="section">
    <h3 class="title is-3 has-text-grey">
      Cursos
    </h3>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <TileCourse
          :course="courses.semanaOmnistack11"
          color-type="is-primary"
        />
      </div>
      <div class="tile is-parent">
        <TileCourse
          :course="courses.semanaOmnistack10"
          color-type="is-success"
        />
      </div>
      <div class="tile is-parent">
        <TileCourse :course="courses.cssFlexbox" color-type="is-info" />
      </div>
    </div>

    <hr />

    <h3 class="title is-3 has-text-grey">
      Eventos
    </h3>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <TileEvent :event="events.pgConfBrazil2019" color-type="is-info" />
      </div>
      <div class="tile is-parent">
        <TileEvent :event="events.phpExperience2019" color-type="is-primary" />
      </div>
      <div class="tile is-parent">
        <TileEvent :event="events.brazilJSConf2017" color-type="is-warning" />
      </div>
    </div>
  </section>
</template>

<script>
import TileCourse from '~/components/Tile/TileCourse'
import TileEvent from '~/components/Tile/TileEvent'

export default {
  components: {
    TileCourse,
    TileEvent
  },
  data: () => ({
    courses: {
      semanaOmnistack11: {
        name: 'Semana OmniStack 11',
        date: 'Março de 2020',
        school: 'Rocketseat',
        hours: 10,
        urlCertificate:
          'https://www.dropbox.com/s/d1nejvkeyvrxmqs/semanaOmnistack11.pdf?dl=0'
      },
      semanaOmnistack10: {
        name: 'Semana OmniStack 10',
        date: 'Janeiro de 2020',
        school: 'Rocketseat'
      },
      cssFlexbox: {
        name: 'CSS Flexbox',
        date: 'Outubro de 2019',
        school: 'Origamid',
        hours: 6,
        urlCertificate:
          'https://www.dropbox.com/s/tm2kypinhmoutv6/cssFlexbox.pdf?dl=0'
      }
    },
    events: {
      pgConfBrazil2019: {
        name: 'PGConf Brasil 2019',
        location: 'São Paulo/SP',
        date: '02 e 03 de Agosto de 2019',
        hours: 16,
        urlCertificate:
          'https://www.dropbox.com/s/7qidwgu8whmfwkc/pgConfBrazil2019.pdf?dl=0'
      },
      phpExperience2019: {
        name: 'PHP Experience 2019',
        location: 'São Paulo/SP',
        date: '05 e 06 de abril de 2019',
        hours: 12,
        urlCertificate:
          'https://www.dropbox.com/s/lfjv7bpp2dav47o/phpExperience2019.pdf?dl=0'
      },
      brazilJSConf2017: {
        name: 'BrazilJS Conf 2017',
        location: 'Porto Alegre/RS',
        date: '25 e 26 de Agosto de 2017',
        hours: 16,
        urlCertificate:
          'https://www.dropbox.com/s/9jtnfgg6b9a5f57/brazilJSConf2017.pdf?dl=0'
      }
    }
  })
}
</script>
