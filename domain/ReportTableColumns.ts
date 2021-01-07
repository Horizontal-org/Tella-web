import moment from 'moment'
import { Column } from 'react-table'
import { Report } from './Report'

export const REPORT_COLUMNS: Column[] = [
  {
    Header: 'Name',
    accessor: 'title',
    className: 'px-3 py-3 font-semibold w-auto',
  },
  {
    Header: 'Date',
    className: 'px-3 py-3 w-36',
    accessor: (report: Report): string => moment(report.date).format('DD MMM YYYY'),
  },
  {
    Header: 'User',
    className: 'px-3 py-3 w-42',
    accessor: 'reporter.name',
  },
]
