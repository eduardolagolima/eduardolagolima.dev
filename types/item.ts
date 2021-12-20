import { Action } from '~/types/action'

type Item = {
  icon?: string
  title: string
  subtitle?: string
  tags?: string[]
  actions?: Action[]
}

export { Item }
