import { Action } from '~/types/action'
import { Certificate } from '~/types/certificate'

const getCertificate = ({ type, fileName }: Certificate): Action => ({
  icon: 'certificate',
  label: 'Certificado',
  url: `/files/certificates/${type}/${fileName}`,
})

const getCourseCertificate = (fileName: string) =>
  getCertificate({ type: 'courses', fileName })

const getEventCertificate = (fileName: string) =>
  getCertificate({ type: 'events', fileName })

const getRepository = (repository: string): Action => ({
  icon: 'github',
  label: 'Repositório',
  url: `https://github.com/eduardolagolima/${repository}`,
})

export { getCourseCertificate, getEventCertificate, getRepository }
