/* eslint-disable no-console */
/* eslint-disable no-alert */
import { storiesOf } from '@storybook/react'
import { FakeReport } from '../moked/report'
import { makeReportData } from '../components/Table/Table.moked.data'
import { ReportDetailsLayout } from './ReportDetails/ReportDetailsLayout'
import { ReportListLayout } from './ReportList/ReportListLayout'
import { ConfigurationListLayout } from './ReportList/ConfigurationListLayout'

export const parameters = {
  layout: 'fullscreen',
}

storiesOf('Layouts', module)
  .add('Report Lists', () => {
    return (
      <ReportListLayout
        loadReports={(requestQuery) => console.log({ requestQuery })}
        onDelete={(toDelete) => console.log({ toDelete })}
        onOpenReport={(toOpen) => console.log({ toOpen })}
        reports={makeReportData(20)}
      />
    )
  })
  .add('Report Details', () => {
    return (
      <ReportDetailsLayout
        onClose={() => console.log('Close report preview')}
        onDelete={(report, file) => console.log(`Delete ${file.src.name} from ${report.name}`)}
        report={FakeReport}
      />
    )
  })
  .add('Configuration Lists', () => {
    return (
      <ConfigurationListLayout
        loadReports={(requestQuery) => console.log({ requestQuery })}
        onDelete={(toDelete) => console.log({ toDelete })}
        onOpenReport={(toOpen) => console.log({ toOpen })}
        reports={makeReportData(20)}
      />
    )
  })
