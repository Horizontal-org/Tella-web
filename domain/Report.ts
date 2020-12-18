import { Reporter } from './Reporter'
import { ReportFile } from './ReportFile'

export type Report = {
  id: string
  title: string
  reporter: Reporter
  date: number
  files: ReportFile[]
}
