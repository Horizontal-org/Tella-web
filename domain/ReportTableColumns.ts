import moment from 'moment'
import { Column } from 'react-table'
import { Report } from './Report'

export const REPORT_COLUMNS: Array<Column> = [
  {
    Header: 'Name',
    accessor: 'name',
    className: 'px-3 py-3 font-semibold w-auto',
  },
  {
    Header: 'Date',
    className: 'px-3 py-3 w-36',
    id: 'date',
    accessor: (report: Report): string => moment(report.date).format('DD MMM YYYY'),
  },
  {
    Header: 'User',
    className: 'px-3 py-3 w-42',
    accessor: (report: Report) => report.reporter.name,
  },
]
