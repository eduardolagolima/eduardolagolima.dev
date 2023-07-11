import { Dayjs } from 'dayjs'

export type Experience = {
  date: Dayjs
  role: string
  company: string
  currentJob?: boolean
  graduation?: boolean
}
