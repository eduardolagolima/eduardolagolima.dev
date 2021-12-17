import dayjs from 'dayjs'

const date = (date, format = 'YYYY-MM') => dayjs.utc(date, format)

const experiences = [
  {
    date: date('2021-08'),
    role: 'Software Developer',
    company: 'Vizir Software Studio',
    currentJob: true,
  },
  {
    date: date('2020-09'),
    role: 'Software Developer',
    company: 'UOL EdTech',
  },
  {
    date: date('2019-07'),
    role: 'Bacharelado, Sistemas de Informação',
    company: 'IMED',
    graduation: true,
  },
  {
    date: date('2017-06'),
    role: 'Software Developer',
    company: 'Atua Sistemas de Informação',
  },
  {
    date: date('2016-06'),
    role: 'Estagiário',
    company: 'Atua Sistemas de Informação',
  },
]

export { experiences }
