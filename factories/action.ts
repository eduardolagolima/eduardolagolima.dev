import { Action } from '~/types/action'

const getAction = (icon: string, label: string, url: string): Action => ({
  icon,
  label,
  url,
})

export const getCertificate = (fileName: string) =>
  getAction('certificate', 'Certificado', `/files/certificates/${fileName}`)

export const getRepository = (repositoryName: string) =>
  getAction(
    'github',
    'Repositório',
    `https://github.com/eduardolagolima/${repositoryName}`
  )

export const getUrl = (url: string) => getAction('open-in-new', 'Link', url)
