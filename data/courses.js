import { getCertificateUrl, getRepositoryUrl } from './utils/getActionsUrl'

const courses = [
  {
    icon: 'react',
    title: 'React Native',
    actions: [
      getCertificateUrl('courses', 'react-native.pdf'),
      getRepositoryUrl('curso-cod3r-react-native'),
    ],
  },
  {
    icon: 'language-typescript',
    title: 'TypeScript',
    actions: [
      getCertificateUrl('courses', 'typescript.pdf'),
      getRepositoryUrl('curso-hcode-typescript'),
    ],
  },
  {
    icon: 'language-css3',
    title: 'CSS Flexbox',
    actions: [
      getCertificateUrl('courses', 'css-flexbox.pdf'),
      getRepositoryUrl('curso-origamid-cssflexbox'),
    ],
  },
]

export { courses }
