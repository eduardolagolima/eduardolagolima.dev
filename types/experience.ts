import { Dayjs } from 'dayjs'

type Experience = {
  date: Dayjs
  role: string
  company: string
  currentJob?: boolean
  graduation?: boolean
}

export { Experience }
