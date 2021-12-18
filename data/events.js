import { getCertificateUrl, getRepositoryUrl } from './utils/getActionsUrl'

const events = [
  {
    icon: 'rocket',
    title: 'Semana OmniStack 11',
    actions: [
      getCertificateUrl('events', 'semana-omnistack-11.pdf'),
      getRepositoryUrl('be-the-hero'),
    ],
  },
  {
    icon: 'rocket',
    title: 'Semana OmniStack 10',
    actions: [getRepositoryUrl('dev-radar')],
  },
  {
    icon: 'database',
    title: 'PGConf 2019',
    actions: [getCertificateUrl('events', 'pgconf-2019.pdf')],
  },
  {
    icon: 'language-php',
    title: 'PHP Experience 2019',
    actions: [getCertificateUrl('events', 'php-experience-2019.pdf')],
  },
  {
    icon: 'language-javascript',
    title: 'BrazilJS 2017',
    actions: [getCertificateUrl('events', 'braziljs-2017.pdf')],
  },
]
export { events }
