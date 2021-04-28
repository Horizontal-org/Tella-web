import { FunctionComponent } from 'react'
import moment from 'moment'
import filesize from 'filesize.js'
import { Report } from '../../domain/Report'
import { ItemInformation } from '../ItemInformation/ItemInformation'

type Props = {
  report: Report
}

export const ReportInformation: FunctionComponent<Props> = ({ report }) => {
  const dict = {
    Date: moment(report.date).format('DD MMM YYYY'),
    Time: moment(report.date).format('h:mm:ss A'),
    Size: filesize(report.files.reduce((p = 0, a) => a.size + p, 0)),
    'Number of files': report.files.length.toString(),
    ID: report.id.toString(),
  }
  return (
    <>
      <ItemInformation title="Report information" dict={dict} />
    </>
  )
}
