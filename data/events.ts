import { getEventCertificate, getRepository } from '~/factories/getActions'
import { Item } from '~/types/item'

const events: Item[] = [
  {
    icon: 'rocket',
    title: 'Semana OmniStack 11',
    actions: [
      getEventCertificate('semana-omnistack-11.pdf'),
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
    actions: [getEventCertificate('pgconf-2019.pdf')],
  },
  {
    icon: 'language-php',
    title: 'PHP Experience 2019',
    actions: [getEventCertificate('php-experience-2019.pdf')],
  },
  {
    icon: 'language-javascript',
    title: 'BrazilJS 2017',
    actions: [getEventCertificate('braziljs-2017.pdf')],
  },
]
export { events }
