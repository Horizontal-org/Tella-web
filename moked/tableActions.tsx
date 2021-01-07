/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { MdDelete } from '@react-icons/all-files/md/MdDelete'
import { Column } from 'react-table'
import cn from 'classnames'
import style from '../components/Table/Table.module.css'
import { REPORT_COLUMNS } from '../domain/ReportTableColumns'
import { btnType, Button } from '../components/Button/Button'

export const NEW_REPORT_COLUMNS: Column[] = [
  ...REPORT_COLUMNS,
  {
    Header: () => '',
    id: 'actions',
    Cell: function ReportActions({ row }) {
      return (
        <div className={cn(style.onlyOnHoverOrSelected, 'px-3')}>
          <Button
            text="Delete"
            icon={<MdDelete />}
            type={btnType.Secondary}
            onClick={() => {
              console.log(`Delete ${row.id}`)
            }}
          />
        </div>
      )
    },
    className: 'py-0 w-32',
  },
]
