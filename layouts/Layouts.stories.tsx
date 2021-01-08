/* eslint-disable no-alert */
import { storiesOf } from '@storybook/react'
import { FakeReport } from '../moked/report'
import { makeReportData } from '../components/Table/Table.moked.data'
import { ReportDetailsLayout } from './ReportDetails/ReportDetailsLayout'
import { ReportListLayout } from './ReportList/ReportListLayout'

storiesOf('Layouts', module)
  .add('Report Lists', () => {
    return <ReportListLayout reports={makeReportData(20)} />
  })
  .add('Report Details', () => {
    return <ReportDetailsLayout report={FakeReport} />
  })
