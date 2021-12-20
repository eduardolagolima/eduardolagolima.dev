import { getRepository } from '~/utils/getActions'
import { Item } from '~/types/item'

const projects: Item[] = [
  {
    icon: 'account',
    title: 'eduardolagolima.dev',
    subtitle: 'Este site que você está usando :)',
    tags: ['Nuxt.js', 'TypeScript', 'Buefy', 'Netlify'],
    actions: [getRepository('eduardolagolima.dev')],
  },
]

export { projects }
