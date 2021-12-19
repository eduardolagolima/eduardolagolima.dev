import { getCertificateUrl, getRepositoryUrl } from './utils/getActionsUrl'

const courses = [
  {
    icon: 'react',
    title: 'React Native',
    subtitle:
      'React Native: Desenvolva APPs Nativas para Android e iOS - Cod3r',
    actions: [
      getCertificateUrl('courses', 'react-native.pdf'),
      getRepositoryUrl('curso-cod3r-react-native'),
    ],
  },
  {
    icon: 'language-typescript',
    title: 'TypeScript',
    subtitle: 'Dominando TypeScript - Hcode',
    actions: [
      getCertificateUrl('courses', 'typescript.pdf'),
      getRepositoryUrl('curso-hcode-typescript'),
    ],
  },
  {
    icon: 'language-css3',
    title: 'CSS Flexbox',
    subtitle: 'CSS Flexbox - Origamid',
    actions: [
      getCertificateUrl('courses', 'css-flexbox.pdf'),
      getRepositoryUrl('curso-origamid-cssflexbox'),
    ],
  },
]

export { courses }
