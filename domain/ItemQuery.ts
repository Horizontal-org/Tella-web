/* eslint-disable @typescript-eslint/ban-types */
import { SortingRule } from 'react-table'

export type ItemQuery = {
  pagination: {
    page: number
    size: number
    total: number
  }
  sort: SortingRule<object>[]
  filter: {
    byName?: string
  }
}
