import { getRepository } from '~/factories/action'
import { Item } from '~/types/item'

export const projects: Item[] = [
  {
    icon: 'mdi mdi-36px mdi-account',
    title: 'eduardolagolima.dev',
    subtitle: 'Este site que você está usando :)',
    tags: ['Nuxt.js', 'TypeScript', 'Bulma', 'Netlify'],
    actions: [getRepository('eduardolagolima.dev')],
  },
]
