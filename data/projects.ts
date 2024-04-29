import { getRepository } from '~/factories/action'
import { Item } from '~/types/item'

export const projects: Item[] = [
  {
    icon: 'mdi mdi-36px mdi-account',
    title: 'eduardolagolima.dev',
    subtitle: 'My personal site',
    tags: ['Nuxt.js', 'TypeScript', 'Bulma', 'Netlify'],
    actions: [getRepository('eduardolagolima.dev')],
  },
  {
    icon: 'mdi mdi-36px mdi-clipboard-text',
    title: 'statement-parser',
    subtitle: 'CLI para extrair os proventos dos extratos da Avenue e B3',
    tags: ['TypeScript'],
    actions: [getRepository('statement-parser')],
  },
]
