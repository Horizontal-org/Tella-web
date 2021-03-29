import moment from 'moment'
import { Column } from 'react-table'
import { Configuration } from './Configuration'

export const CONFIG_COLUMNS: Array<Column> = [
  {
    Header: 'Configuration name',
    accessor: 'name',
    className: 'px-3 py-3 font-semibold w-auto',
  },
  {
    Header: 'Created',
    className: 'px-3 py-3 w-36',
    id: 'date',
    accessor: (config: Configuration): string => moment(config.date).format('DD MMM YYYY'),
  },
  {
    Header: 'Number of connections',
    accessor: 'connections',
    className: 'px-3 py-3 w-42',
  },
]
