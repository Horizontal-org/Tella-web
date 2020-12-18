import moment from 'moment'
import { Column } from 'react-table'
import { Report } from './Report'

export const REPORT_COLUMNS: Column[] = [
  {
    Header: 'Name',
    accessor: 'title',
    className: 'font-bold',
  },
  {
    Header: 'Date',
    accessor: (report: Report): string => moment(report.date).format('DD MMM YYYY'),
  },
  {
    Header: 'User',
    accessor: 'reporter.name',
  },
]
