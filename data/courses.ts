import { getCertificate, getRepository } from '~/utils/getActions'
import { Item } from '~/types/item'

const courses: Item[] = [
  {
    icon: 'react',
    title: 'React Native',
    subtitle:
      'React Native: Desenvolva APPs Nativas para Android e iOS - Cod3r',
    actions: [
      getCertificate('courses', 'react-native.pdf'),
      getRepository('curso-cod3r-react-native'),
    ],
  },
  {
    icon: 'language-typescript',
    title: 'TypeScript',
    subtitle: 'Dominando TypeScript - Hcode',
    actions: [
      getCertificate('courses', 'typescript.pdf'),
      getRepository('curso-hcode-typescript'),
    ],
  },
  {
    icon: 'language-css3',
    title: 'CSS Flexbox',
    subtitle: 'CSS Flexbox - Origamid',
    actions: [
      getCertificate('courses', 'css-flexbox.pdf'),
      getRepository('curso-origamid-cssflexbox'),
    ],
  },
]

export { courses }
