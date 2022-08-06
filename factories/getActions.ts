import { Action } from '~/types/action'
import { Certificate } from '~/types/certificate'

const getAction = (icon: string, label: string, url: string): Action => ({
  icon,
  label,
  url,
})

const getCertificate = ({ type, fileName }: Certificate) =>
  getAction(
    'certificate',
    'Certificado',
    `/files/certificates/${type}/${fileName}`
  )

const getCourseCertificate = (fileName: string) =>
  getCertificate({ type: 'courses', fileName })

const getEventCertificate = (fileName: string) =>
  getCertificate({ type: 'events', fileName })

const getRepository = (repository: string) =>
  getAction(
    'github',
    'Repositório',
    `https://github.com/eduardolagolima/${repository}`
  )

const getUrl = (url: string) => getAction('open-in-new', 'Link', url)

export { getCourseCertificate, getEventCertificate, getRepository, getUrl }
