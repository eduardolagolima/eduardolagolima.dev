import { Action } from '~/types/action'

const getCertificate = (type: string, certificate: string): Action => ({
  icon: 'open-in-new',
  label: 'Certificado',
  url: `/files/certificates/${type}/${certificate}`,
})

const getRepository = (repository: string): Action => ({
  icon: 'github',
  label: 'Repositório',
  url: `https://github.com/eduardolagolima/${repository}`,
})

export { getCertificate, getRepository }
