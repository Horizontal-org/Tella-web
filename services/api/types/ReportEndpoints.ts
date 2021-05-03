import { ReadReportDto, ListReports } from '../../../domain/dto/report'

export interface ReportEndpoints {
  byId: (
    data: Record<string, never>,
    params?: {
      id: string
    },
    query?: Record<string, unknown>
  ) => Promise<ReadReportDto>
  list: (
    data: Record<string, unknown>,
    params?: Record<string, unknown>,
    query?: {
      offset: number
      limit: number
    }
  ) => Promise<ListReports>
}
