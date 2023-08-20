import { getCertificate, getRepository, getUrl } from '~/factories/action'
import { Item } from '~/types/item'

export const courses: Item[] = [
  {
    icon: 'mdi mdi-36px mdi-react',
    title: 'Remix.run',
    subtitle: 'Remix.run - Fabio Vedovelli',
    actions: [
      getUrl(
        'https://youtube.com/playlist?list=PLFJmwzuHdBRRtyT_87aCtK7n8FTPmDbES',
      ),
    ],
  },
  {
    icon: 'mdi mdi-36px mdi-vuejs',
    title: 'Vue.js 3',
    subtitle: 'Curso Vue.js 3 do iniciante ao avançado - Igor Halfeld',
    actions: [
      getUrl('https://treinamento.vuejsbrasil.org/'),
      getCertificate('courses/curso-vuejs3.pdf'),
      getRepository('curso-vuejs3'),
    ],
  },
  {
    icon: 'mdi mdi-36px mdi-flask-outline',
    title: 'Testes',
    subtitle: 'Aprenda a testar Aplicações Javascript - Fábio Vedovelli',
    actions: [
      getUrl('https://javascript.tv.br/'),
      getRepository('curso-testes-javascript'),
    ],
  },
  {
    icon: 'mdi mdi-36px mdi-language-go',
    title: 'Go',
    subtitle: 'Desenvolvimento Web com Go - Elton Minetto',
    actions: [
      getUrl(
        'https://www.youtube.com/playlist?list=PL0qudqr7_CuStQUsf2vtHXMxOp5gl_ENc',
      ),
      getRepository('curso-desenvolvimento-web-com-go'),
    ],
  },
  {
    icon: 'mdi mdi-36px mdi-layers',
    title: 'Domain-Driven Design',
    subtitle: 'DDD do jeito certo - EximiaCo',
    actions: [
      getUrl(
        'https://www.youtube.com/playlist?list=PLkpjQs-GfEMN8CHp7tIQqg6JFowrIX9ve',
      ),
    ],
  },
  {
    icon: 'mdi mdi-36px mdi-language-javascript',
    title: 'Javascript',
    subtitle: 'Mini-curso JS Moderno (ES6+) - Willian Justen',
    actions: [
      getUrl(
        'https://www.youtube.com/playlist?list=PLlAbYrWSYTiPQ1BE8klOtheBC0mtL3hEi',
      ),
      getRepository('mini-curso-js-moderno-es6'),
    ],
  },
  {
    icon: 'mdi mdi-36px mdi-language-typescript',
    title: 'TypeScript',
    subtitle: 'Mini-curso de TypeScript - Willian Justen',
    actions: [
      getUrl(
        'https://www.youtube.com/playlist?list=PLlAbYrWSYTiPanrzauGa7vMuve7_vnXG_',
      ),
      getRepository('mini-curso-typescript'),
    ],
  },
  {
    icon: 'mdi mdi-36px mdi-github',
    title: 'Git e Github',
    subtitle: 'Git e Github na Vida Real - Willian Justen',
    actions: [
      getUrl(
        'https://www.youtube.com/playlist?list=PLlAbYrWSYTiNqugqFFWWsgONJsmc3eMpg',
      ),
      getRepository('curso-git-e-github-na-vida-real'),
    ],
  },
  {
    icon: 'mdi mdi-36px mdi-react',
    title: 'React Native',
    subtitle:
      'React Native: Desenvolva APPs Nativas para Android e iOS - Cod3r',
    actions: [
      getUrl('https://www.udemy.com/course/curso-react-native/'),
      getCertificate('courses/react-native.pdf'),
      getRepository('curso-cod3r-react-native'),
    ],
  },
  {
    icon: 'mdi mdi-36px mdi-language-typescript',
    title: 'TypeScript',
    subtitle: 'Dominando TypeScript - Hcode',
    actions: [
      getUrl('https://www.udemy.com/course/curso-online-typescript/'),
      getCertificate('courses/typescript.pdf'),
      getRepository('curso-hcode-typescript'),
    ],
  },
  {
    icon: 'mdi mdi-36px mdi-language-css3',
    title: 'CSS Flexbox',
    subtitle: 'CSS Flexbox - Origamid',
    actions: [
      getUrl('https://www.origamid.com/curso/css-flexbox/'),
      getCertificate('courses/css-flexbox.pdf'),
      getRepository('curso-origamid-cssflexbox'),
    ],
  },
]
