/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FunctionComponent, useState } from 'react'
import { MdClose } from '@react-icons/all-files/md/MdClose'
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

type Props = {
  report: Report
  onDelete: (report: Report, file: ReportFile) => void
  onClose: () => void
}

export const ReportDetailsLayout: FunctionComponent<Props> = ({ report, onDelete, onClose }) => {
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
      <div
        className={cn(
          'w-64 border-r px-6 pt-20 border-gray-100 transition-all transform duration-300 h-screen overflow-y-scroll fixed left-0 top-0',
          {
            '-translate-x-64': !leftSidebarOpen,
          }
        )}
      >
        <ReportInformation report={report} />
        <div className="grid grid-cols-2 gap-2 mt-6">
          {report.files.map((file) => (
            <Thumbnail file={file} key={file.src.toString()} />
          ))}
        </div>
      </div>

      <div
        className={cn('flex flex-col flex-1 pt-20 transition-all duration-300 ease-in-out', {
          'transform ml-64': leftSidebarOpen,
          'transform mr-64': rightSidebarOpen,
        })}
      >
        <div id="slider-bar" className="flex px-4">
          <div>
            <img
              src="/images/handbar-toggle.png"
              alt="Toggle left sidebar"
              className="cursor-pointer border-r my-2 py-1 pr-3"
              onClick={toggleLeftSideBar}
            />
          </div>

          <div className="flex-1 flex justify-between">
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
          </div>
          <div>
            <img
              src="/images/handbar-toggle.png"
              alt="Toggle right sidebar"
              className="cursor-pointer transform rotate-180 border-r my-2 py-1 pr-3"
              onClick={toggleRightSideBar}
            />
          </div>
        </div>
        <div id="content" className="px-20 py-16 flex-1 flex">
          <Thumbnail file={report.files[current - 1]} full />
        </div>
      </div>
      <div
        className={cn(
          'w-64 border-l px-6 pt-20 border-gray-100 transition-all transform duration-300 h-screen overflow-y-scroll fixed right-0 top-0',
          {
            'translate-x-64': !rightSidebarOpen,
          }
        )}
      />

      <div className="px-8 py-5 w-full border-b border-gray-100 flex font-xl items-center justify-items-start fixed top-0 right-0 bg-white justify-between">
        <div className="flex items-center">
          <button type="button">
            <MdClose className="text-gray-300" />
          </button>
          <h2 className="text-gray-500 font-bold px-4">{report.title}</h2>
        </div>
        <div className="flex space-x-2">
          <ButtonMenu openSide="left">
            <ButtonOption
              icon={<MdDelete />}
              text="Delete"
              color="#D6933B"
              onClick={() => onDelete(report, report.files[current])}
            />
          </ButtonMenu>
          <Button icon={<MdRemoveRedEye />} text="Preview" />
        </div>
      </div>
    </div>
  )
}
