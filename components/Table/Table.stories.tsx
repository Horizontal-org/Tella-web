/* eslint-disable no-alert */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-props-no-spreading */

import { storiesOf } from '@storybook/react'
import { ItemQuery } from '../../domain/ItemQuery'
import { REPORT_COLUMNS } from '../../domain/ReportTableColumns'
import { NEW_REPORT_COLUMNS } from '../../moked/tableActions'
import { Table } from './Table'
import { makeReportData } from './Table.moked.data'

storiesOf('Tables', module)
  .add('Report table', () => {
    return (
      <div className="w-full">
        <Table columns={REPORT_COLUMNS} data={makeReportData(20)} />
      </div>
    )
  })
  .add('Add callback actions', () => {
    const showMessage = (rq: ItemQuery) => {
      const type = rq.sort[0] ? rq.sort[0].id : 'default'
      const order = rq.sort[0] ? (rq.sort[0].desc ? 'descendent' : 'ascendent') : ''
      alert(`Sorting by ${type} ${order}`)
    }

    return (
      <div className="w-full">
        <Table columns={NEW_REPORT_COLUMNS} data={makeReportData(20)} onFetch={showMessage} />
      </div>
    )
  })
