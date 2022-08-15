import {
  getCourseCertificate,
  getRepository,
  getUrl,
} from '~/factories/getActions'
import { Item } from '~/types/item'

const courses: Item[] = [
  {
    icon: 'language-go',
    title: 'Go',
    subtitle: 'Desenvolvimento Web com Go - Elton Minetto',
    actions: [
      getUrl(
        'https://www.youtube.com/playlist?list=PL0qudqr7_CuStQUsf2vtHXMxOp5gl_ENc'
      ),
      getRepository('curso-desenvolvimento-web-com-go'),
    ],
  },
  {
    icon: 'layers',
    title: 'Domain-Driven Design',
    subtitle: 'DDD do jeito certo - EximiaCo',
    actions: [
      getUrl(
        'https://www.youtube.com/playlist?list=PLkpjQs-GfEMN8CHp7tIQqg6JFowrIX9ve'
      ),
    ],
  },
  {
    icon: 'language-javascript',
    title: 'Javascript',
    subtitle: 'Mini-curso JS Moderno (ES6+) - Willian Justen',
    actions: [
      getUrl(
        'https://www.youtube.com/playlist?list=PLlAbYrWSYTiPQ1BE8klOtheBC0mtL3hEi'
      ),
      getRepository('mini-curso-js-moderno-es6'),
    ],
  },
  {
    icon: 'language-typescript',
    title: 'TypeScript',
    subtitle: 'Mini-curso de TypeScript - Willian Justen',
    actions: [
      getUrl(
        'https://www.youtube.com/playlist?list=PLlAbYrWSYTiPanrzauGa7vMuve7_vnXG_'
      ),
      getRepository('mini-curso-typescript'),
    ],
  },
  {
    icon: 'github',
    title: 'Git e Github',
    subtitle: 'Git e Github na Vida Real - Willian Justen',
    actions: [
      getUrl(
        'https://www.youtube.com/playlist?list=PLlAbYrWSYTiNqugqFFWWsgONJsmc3eMpg'
      ),
      getRepository('curso-git-e-github-na-vida-real'),
    ],
  },
  {
    icon: 'react',
    title: 'React Native',
    subtitle:
      'React Native: Desenvolva APPs Nativas para Android e iOS - Cod3r',
    actions: [
      getUrl('https://www.udemy.com/course/curso-react-native/'),
      getCourseCertificate('react-native.pdf'),
      getRepository('curso-cod3r-react-native'),
    ],
  },
  {
    icon: 'language-typescript',
    title: 'TypeScript',
    subtitle: 'Dominando TypeScript - Hcode',
    actions: [
      getUrl('https://www.udemy.com/course/curso-online-typescript/'),
      getCourseCertificate('typescript.pdf'),
      getRepository('curso-hcode-typescript'),
    ],
  },
  {
    icon: 'language-css3',
    title: 'CSS Flexbox',
    subtitle: 'CSS Flexbox - Origamid',
    actions: [
      getUrl('https://www.origamid.com/curso/css-flexbox/'),
      getCourseCertificate('css-flexbox.pdf'),
      getRepository('curso-origamid-cssflexbox'),
    ],
  },
]

export { courses }
