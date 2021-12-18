const getCertificateUrl = (type, certificate) => ({
  icon: 'open-in-new',
  label: 'Certificado',
  url: `/files/certificates/${type}/${certificate}`,
})

const getRepositoryUrl = (repository) => ({
  icon: 'github',
  label: 'Repositório',
  url: `https://github.com/eduardolagolima/${repository}`,
})

export { getCertificateUrl, getRepositoryUrl }
