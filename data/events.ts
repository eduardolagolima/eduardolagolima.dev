import { getCertificate, getRepository } from '~/factories/action'
import { Item } from '~/types/item'

export const events: Item[] = [
  {
    icon: 'mdi mdi-36px mdi-rocket',
    title: 'Semana OmniStack 11',
    actions: [
      getCertificate('events/semana-omnistack-11.pdf'),
      getRepository('be-the-hero'),
    ],
  },
  {
    icon: 'mdi mdi-36px mdi-rocket',
    title: 'Semana OmniStack 10',
    actions: [getRepository('dev-radar')],
  },
  {
    icon: 'mdi mdi-36px mdi-database',
    title: 'PGConf 2019',
    actions: [getCertificate('events/pgconf-2019.pdf')],
  },
  {
    icon: 'mdi mdi-36px mdi-language-php',
    title: 'PHP Experience 2019',
    actions: [getCertificate('events/php-experience-2019.pdf')],
  },
  {
    icon: 'mdi mdi-36px mdi-language-javascript',
    title: 'BrazilJS 2017',
    actions: [getCertificate('events/braziljs-2017.pdf')],
  },
]
