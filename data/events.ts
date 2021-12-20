import { getCertificate, getRepository } from '~/utils/getActions'
import { Item } from '~/types/item'

const events: Item[] = [
  {
    icon: 'rocket',
    title: 'Semana OmniStack 11',
    actions: [
      getCertificate('events', 'semana-omnistack-11.pdf'),
      getRepository('be-the-hero'),
    ],
  },
  {
    icon: 'rocket',
    title: 'Semana OmniStack 10',
    actions: [getRepository('dev-radar')],
  },
  {
    icon: 'database',
    title: 'PGConf 2019',
    actions: [getCertificate('events', 'pgconf-2019.pdf')],
  },
  {
    icon: 'language-php',
    title: 'PHP Experience 2019',
    actions: [getCertificate('events', 'php-experience-2019.pdf')],
  },
  {
    icon: 'language-javascript',
    title: 'BrazilJS 2017',
    actions: [getCertificate('events', 'braziljs-2017.pdf')],
  },
]
export { events }