import { FunctionComponent, useState } from 'react'
import { MdOpenInNew } from '@react-icons/all-files/md/MdOpenInNew'
import { MdRemoveRedEye } from '@react-icons/all-files/md/MdRemoveRedEye'
import { MdSave } from '@react-icons/all-files/md/MdSave'
import { MdDelete } from '@react-icons/all-files/md/MdDelete'
import { btnType, Button } from '../../components/Button/Button'
import { ReportBar } from '../../components/ReportBar/ReportBar'
import { SidebarLayout } from '../../components/Sidebar/SidebarLayout'
import { Table } from '../../components/Table/Table'
import { Report } from '../../domain/Report'
import { TopMenuMokedData, BottomMenuMokedData } from '../../moked/menu'
import { MainLayout } from '../Main/MainLayout'
import { REPORT_COLUMNS } from '../../domain/ReportTableColumns'
import { ButtonMenu } from '../../components/ButtonMenu/ButtonMenu'
import { ButtonOption } from '../../components/ButtonMenu/ButtonOption'

type Props = {
  reports: Report[]
}

export const ReportListLayout: FunctionComponent<Props> = ({ reports }) => {
  const [currentReport, setCurrentReport] = useState<Report | undefined>()
  const [selectedReports, setSelectedReports] = useState<Report[]>([])

  const openReport = () => {
    setCurrentReport(selectedReports[0])
  }

  return (
    <MainLayout
      title="Reports"
      subtitle="All the files and reports sent by your users"
      content={
        <div>
          <div className="flex h-10 space-x-2 mb-2 p-2">
            {selectedReports.length > 0 && (
              <>
                {selectedReports.length === 1 && (
                  <>
                    <Button icon={<MdOpenInNew />} text="Open" />
                    <Button
                      type={btnType.Secondary}
                      icon={<MdRemoveRedEye />}
                      text="Preview"
                      onClick={openReport}
                    />
                  </>
                )}
                <Button type={btnType.Secondary} icon={<MdSave />} text="Download" />
                <ButtonMenu openSide="right">
                  <ButtonOption icon={<MdDelete />} text="Delete" color="#D6933B" />
                </ButtonMenu>
              </>
            )}
          </div>
          <Table columns={REPORT_COLUMNS} data={reports} onSelection={setSelectedReports} />
        </div>
      }
      leftbar={<SidebarLayout topMenu={TopMenuMokedData} bottomMenu={BottomMenuMokedData} />}
      rightbar={<ReportBar report={currentReport} />}
      onClosePreview={() => setCurrentReport(undefined)}
      currentReport={currentReport}
    />
  )
}

ReportListLayout.defaultProps = {
  reports: [],
}
