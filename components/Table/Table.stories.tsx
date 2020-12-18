/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-props-no-spreading */
import { storiesOf } from '@storybook/react'
import { REPORT_COLUMNS } from '../../domain/ReportTableColumns'
import { Table } from './Table'
import { makeReportData } from './Table.moked.data'

storiesOf('Tables', module).add('Report table', () => {
  return (
    <div className="w-full">
      <Table columns={REPORT_COLUMNS} data={makeReportData(20)} />
    </div>
  )
})
