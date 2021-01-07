/* eslint-disable no-alert */
import { storiesOf } from '@storybook/react'
import { MdOpenInNew } from '@react-icons/all-files/md/MdOpenInNew'
import { MdRemoveRedEye } from '@react-icons/all-files/md/MdRemoveRedEye'
import { MdSave } from '@react-icons/all-files/md/MdSave'
import { SidebarLayout } from '../Sidebar/SidebarLayout'
import { TopMenuMokedData, BottomMenuMokedData } from '../../moked/menu'
import { ReportBarLayout } from '../ReportBar/ReportBarLayout'
import { FakeReport } from '../../moked/report'
import { makeReportData } from '../../components/Table/Table.moked.data'
import { NEW_REPORT_COLUMNS } from '../../moked/tableActions'
import { Table } from '../../components/Table/Table'
import { MainLayout } from './MainLayout'
import { btnType, Button } from '../../components/Button/Button'

storiesOf('Layouts', module).add('Main', () => {
  return (
    <MainLayout
      title="Reports"
      subtitle="All the files and reports sent by your users"
      content={
        <div>
          <div className="flex space-x-2 mb-2 p-2">
            <Button icon={<MdOpenInNew />} text="Open" />
            <Button type={btnType.Secondary} icon={<MdRemoveRedEye />} text="Preview" />
            <Button type={btnType.Secondary} icon={<MdSave />} text="Download" />
            <Button type={btnType.Secondary} text="..." />
          </div>
          <Table columns={NEW_REPORT_COLUMNS} data={makeReportData(20)} />
        </div>
      }
      leftbar={<SidebarLayout topMenu={TopMenuMokedData} bottomMenu={BottomMenuMokedData} />}
      rightbar={<ReportBarLayout report={FakeReport} />}
    />
  )
})
