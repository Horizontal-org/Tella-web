/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-props-no-spreading */
import { MdDelete } from '@react-icons/all-files/md/MdDelete'
import { storiesOf } from '@storybook/react'
import { Column } from 'react-table'
import { REPORT_COLUMNS } from '../../domain/ReportTableColumns'
import { btnType, Button } from '../Button/Button'
import { Table } from './Table'
import { makeReportData } from './Table.moked.data'
import style from './Table.module.css'

storiesOf('Tables', module)
  .add('Report table', () => {
    return (
      <div className="w-full">
        <Table columns={REPORT_COLUMNS} data={makeReportData(20)} />
      </div>
    )
  })
  .add('Add callback actions', () => {
    const NEW_REPORT_COLUMNS: Column[] = [
      ...REPORT_COLUMNS,
      {
        Header: () => '',
        id: 'actions',
        Cell: function ReportActions({ row }) {
          return (
            <div className={style.onlyOnHoverOrSelected}>
              <Button
                text="Delete"
                icon={<MdDelete />}
                type={btnType.Secondary}
                onClick={(_) => {
                  console.log(`Delete ${row.id}`)
                }}
              />
            </div>
          )
        },
        className: 'py-0',
      },
    ]
    return (
      <div className="w-full">
        <Table columns={NEW_REPORT_COLUMNS} data={makeReportData(20)} />
      </div>
    )
  })
