import { Reporter } from './Reporter'
import { ReportFile } from './ReportFile'
import { Item } from './Item'

export class Report extends Item {
  reporter: Reporter

  date: number

  files: ReportFile[]
}
