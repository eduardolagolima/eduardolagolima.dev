import type { Action } from '~/types/action'

export type Item = {
  icon?: string
  title: string
  subtitle?: string
  tags?: string[]
  actions?: Action[]
}
