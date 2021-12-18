import { getRepositoryUrl } from './utils/getActionsUrl'

const projects = [
  {
    icon: 'account',
    title: 'eduardolagolima.dev',
    subtitle: 'Este site que você está usando :)',
    tags: ['Vue.js', 'Nuxt.js', 'Buefy', 'Netlify'],
    actions: [getRepositoryUrl('eduardolagolima.dev')],
  },
]

export { projects }
