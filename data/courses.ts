import { getCourseCertificate, getRepository } from '~/factories/getActions'
import { Item } from '~/types/item'

const courses: Item[] = [
  {
    icon: 'language-javascript',
    title: 'Javascript',
    subtitle: 'Mini-curso JS Moderno (ES6+) - Willian Justen',
    actions: [getRepository('mini-curso-js-moderno-es6')],
  },
  {
    icon: 'language-typescript',
    title: 'TypeScript',
    subtitle: 'Mini-curso de TypeScript - Willian Justen',
    actions: [getRepository('mini-curso-typescript')],
  },
  {
    icon: 'github',
    title: 'Git e Github',
    subtitle: 'Git e Github na Vida Real - Willian Justen',
    actions: [getRepository('curso-git-e-github-na-vida-real')],
  },
  {
    icon: 'react',
    title: 'React Native',
    subtitle:
      'React Native: Desenvolva APPs Nativas para Android e iOS - Cod3r',
    actions: [
      getCourseCertificate('react-native.pdf'),
      getRepository('curso-cod3r-react-native'),
    ],
  },
  {
    icon: 'language-typescript',
    title: 'TypeScript',
    subtitle: 'Dominando TypeScript - Hcode',
    actions: [
      getCourseCertificate('typescript.pdf'),
      getRepository('curso-hcode-typescript'),
    ],
  },
  {
    icon: 'language-css3',
    title: 'CSS Flexbox',
    subtitle: 'CSS Flexbox - Origamid',
    actions: [
      getCourseCertificate('css-flexbox.pdf'),
      getRepository('curso-origamid-cssflexbox'),
    ],
  },
]

export { courses }
