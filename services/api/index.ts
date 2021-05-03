import { ReadReportDto, ListReports } from '../../domain/dto/report'
import { ReadUserDto } from '../../domain/dto/user'
import { UserEndpoints, ReportEndpoints, FileEndpoints } from './types'

import { EndpointCreator } from './createEndpoint'

interface Api {
  user: UserEndpoints
  report: ReportEndpoints
  file: FileEndpoints
}

export const CreateApi = (baseUrl: string, authToken: string): Api => {
  const endpoint = new EndpointCreator(baseUrl, authToken)

  const userEndpoints: UserEndpoints = {
    create: endpoint.create('POST', 'user', ReadUserDto),
    toggleRole: endpoint.create('POST', 'user/:id', ReadUserDto),
  }

  const reportEndpoints: ReportEndpoints = {
    byId: endpoint.create('GET', 'report/:id', ReadReportDto),
    list: endpoint.create('GET', 'report', ListReports),
  }

  const fileEndpoints: FileEndpoints = {
    fetch: endpoint.create<unknown, string, { reportId: string; fileId: string }>(
      'GET',
      'file/:reportId/:fileId'
    ),
  }

  return {
    user: userEndpoints,
    report: reportEndpoints,
    file: fileEndpoints,
  }
}
