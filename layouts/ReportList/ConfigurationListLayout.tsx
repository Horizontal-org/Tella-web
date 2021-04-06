import { FormEvent, FunctionComponent, useEffect, useRef, useState } from 'react'
import { MdOpenInNew } from '@react-icons/all-files/md/MdOpenInNew'
import { MdRemoveRedEye } from '@react-icons/all-files/md/MdRemoveRedEye'
import { MdSave } from '@react-icons/all-files/md/MdSave'
import { MdDelete } from '@react-icons/all-files/md/MdDelete'
import { btnType, Button, Preview } from '../../components/Button/Button'
import { ReportBar } from '../../components/ReportBar/ReportBar'
import { SidebarLayout } from '../../components/Sidebar/SidebarLayout'
import { Table } from '../../components/Table/Table'
import { Report } from '../../domain/Report'
import { TopMenuMokedData, BottomMenuMokedData } from '../../moked/menu'
import { MainLayout } from '../Main/MainLayout'
import { REPORT_COLUMNS } from '../../domain/ReportTableColumns'
import { ButtonMenu } from '../../components/ButtonMenu/ButtonMenu'
import { ButtonOption } from '../../components/ButtonMenu/ButtonOption'
import { ReportsQuery } from '../../domain/ReportQuery'
import { SearchInput } from '../../components/Inputs/SearchInput/SearchInput'

type Props = {
  reports: Report[]
  loadReports: (reportsQuery: ReportsQuery) => void
  onDelete: (reports: Report[]) => void
  onOpenReport: (report: Report) => void
}

export const ConfigurationListLayout: FunctionComponent<Props> = ({
  reports,
  loadReports,
  onDelete,
  onOpenReport,
}) => {
  const [currentReport, setCurrentReport] = useState<Report | undefined>()
  const [selectedReports, setSelectedReports] = useState<Report[]>([])
  const [currentReportQuery, setReportQuery] = useState<ReportsQuery>({
    pagination: {
      page: 1,
      total: 1,
      size: 1,
    },
    sort: [],
    filter: {},
  })
  const searchInput = useRef<HTMLInputElement>()

  const openReport = () => {
    setCurrentReport(selectedReports[0])
  }

  const search = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const name = searchInput.current.value
    setReportQuery({
      ...currentReportQuery,
      filter: {
        byName: name,
      },
    })
  }

  useEffect(() => {
    loadReports(currentReportQuery)
  }, [currentReportQuery])

  return (
    <MainLayout
      title="Configuration"
      subtitle="All the files and reports sent by your users"
      content={
        <div>
          <div className="flex h-10 space-x-2 mb-2 p-2">
            {selectedReports.length === 0 && (
              <form onSubmit={search} className="flex">
                <SearchInput ref={searchInput} defaultValue={currentReportQuery.filter?.byName} />
              </form>
            )}
            {selectedReports.length > 0 && (
              <>
                {selectedReports.length === 1 && (
                  <>
                    <Button
                      icon={<MdOpenInNew />}
                      text="Open"
                      onClick={() => {
                        onOpenReport(selectedReports[0])
                      }}
                    />
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
                  <ButtonOption
                    icon={<MdDelete />}
                    text="Delete"
                    color="#D6933B"
                    onClick={() => onDelete(selectedReports)}
                  />
                </ButtonMenu>
              </>
            )}
          </div>
          <Table
            columns={REPORT_COLUMNS}
            data={reports}
            reportQuery={currentReportQuery}
            onSelection={setSelectedReports}
            onFetch={setReportQuery}
          />
        </div>
      }
      leftbar={<SidebarLayout topMenu={TopMenuMokedData} bottomMenu={BottomMenuMokedData} />}
      rightbar={<ReportBar report={currentReport} />}
      onClosePreview={() => setCurrentReport(undefined)}
      currentReport={currentReport}
    />
  )
}

ConfigurationListLayout.defaultProps = {
  reports: [],
}
