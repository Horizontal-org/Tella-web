/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FunctionComponent, useState } from 'react'
import cn from 'classnames'
import { MdInfoOutline } from '@react-icons/all-files/md/MdInfoOutline'
import { MdSave } from '@react-icons/all-files/md/MdSave'
import { BsArrowsAngleExpand } from '@react-icons/all-files/bs/BsArrowsAngleExpand'
import { MdRemoveRedEye } from '@react-icons/all-files/md/MdRemoveRedEye'
import { MdDelete } from '@react-icons/all-files/md/MdDelete'
import { Report } from '../../domain/Report'
import { ReportInformation } from '../../components/ReportInformation/ReportInformation'
import { Thumbnail } from '../../components/Thumbnail/Thumbnail'
import { btnType, Button } from '../../components/Button/Button'
import { SliderControl } from '../../components/Slider/SliderControl'
import { ButtonMenu } from '../../components/ButtonMenu/ButtonMenu'
import { ButtonOption } from '../../components/ButtonMenu/ButtonOption'
import { ReportFile } from '../../domain/ReportFile'
import { TopBar } from '../../components/TopBar/TopBar'
import { ToggleButtonsBar } from '../../components/ToggleButtonsBar/ToggleButtonsBar'
import { MainContent } from '../../components/MainContent/MainContent'
import { LeftCollapsingSidebar } from '../../components/CollapsingSidebar/LeftCollapsingSidebar'

type Props = {
  report: Report
  onDelete: (report: Report, file: ReportFile) => void
  onClose: () => void
}

export const ReportDetailsLayout: FunctionComponent<Props> = ({ report, onDelete }) => {
  const [leftSidebarOpen, changeLeftSidebarOpneStatus] = useState(true)
  const [rightSidebarOpen, changeRightSidebarOpneStatus] = useState(true)

  const [current, setCurrent] = useState(1)

  const goNext = () => {
    if (current === report.files.length) {
      setCurrent(1)
      return
    }
    setCurrent(current + 1)
  }

  const goPrev = () => {
    if (current === 1) {
      setCurrent(report.files.length)
      return
    }
    setCurrent(current - 1)
  }

  const toggleLeftSideBar = () => changeLeftSidebarOpneStatus(!leftSidebarOpen)
  const toggleRightSideBar = () => changeRightSidebarOpneStatus(!rightSidebarOpen)

  return (
    <div className="flex flex-grow min-h-screen">
      <LeftCollapsingSidebar collapsed={!leftSidebarOpen}>
        <ReportInformation report={report} />
        <div className="grid grid-cols-2 gap-2 mt-6">
          {report.files.map((file) => (
            <Thumbnail file={file} key={file.src.toString()} />
          ))}
        </div>
      </LeftCollapsingSidebar>

      <div
        className={cn('flex flex-col flex-1 pt-20 transition-all duration-300 ease-in-out', {
          'transform ml-64': leftSidebarOpen,
          'transform mr-64': rightSidebarOpen,
        })}
      >
        <ToggleButtonsBar leftToggle={toggleLeftSideBar} rightToggle={toggleRightSideBar}>
          <div className="flex-1 flex space-x-2 mb-2 px-4 py-2">
            <Button type={btnType.Secondary} icon={<MdInfoOutline />} text="File Information" />
            <Button type={btnType.Secondary} icon={<MdSave />} text="Download file" />
            <Button type={btnType.Secondary} text="..." />
          </div>
          <div className="flex space-x-4 mb-2 px-4 py-2 items-center">
            <Button type={btnType.Secondary} icon={<BsArrowsAngleExpand />} />
            <div className="w-24">
              <SliderControl
                goNext={goNext}
                goPrev={goPrev}
                current={current}
                total={report.files.length}
              />
            </div>
          </div>
        </ToggleButtonsBar>

        <MainContent>
          <Thumbnail file={report.files[current - 1]} full />
        </MainContent>
      </div>
      <div
        className={cn(
          'w-64 border-l px-6 pt-20 border-gray-100 transition-all transform duration-300 h-screen overflow-y-scroll fixed right-0 top-0',
          {
            'translate-x-64': !rightSidebarOpen,
          }
        )}
      />

      <TopBar title={report.name}>
        <ButtonMenu openSide="left">
          <ButtonOption
            icon={<MdDelete />}
            text="Delete"
            color="#D6933B"
            onClick={() => onDelete(report, report.files[current])}
          />
        </ButtonMenu>
        <Button icon={<MdRemoveRedEye />} text="Preview" />
      </TopBar>
    </div>
  )
}
