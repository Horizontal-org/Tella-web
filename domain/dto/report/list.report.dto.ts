import { Type } from 'class-transformer'
import { IsNumber } from 'class-validator'
import { ReadReportDto } from './read.report.dto'

export class ListReports {
  @IsNumber()
  total: number

  @Type(() => ReadReportDto)
  results: ReadReportDto[]
}
