import { Action } from '~/types/action'

const getAction = (icon: string, label: string, url: string): Action => ({
  icon,
  label,
  url,
})

export const getCertificate = (fileName: string) =>
  getAction(
    'mdi mdi-18px mdi-certificate',
    'Certificado',
    `/files/certificates/${fileName}`,
  )

export const getRepository = (repositoryName: string) =>
  getAction(
    'mdi mdi-18px mdi-github',
    'Repositório',
    `https://github.com/eduardolagolima/${repositoryName}`,
  )

export const getUrl = (url: string) =>
  getAction('mdi mdi-18px mdi-open-in-new', 'Link', url)
