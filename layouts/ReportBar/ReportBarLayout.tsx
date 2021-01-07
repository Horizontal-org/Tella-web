import moment from 'moment'
import React, { FunctionComponent } from 'react'
import filesize from 'filesize.js'
import { Slider } from '../../components/Slider/Slider'
import { Thumbnail } from '../../components/Thumbnail/Thumbnail'
import { Report } from '../../domain/Report'

type Props = {
  report: Report
}

export const ReportBarLayout: FunctionComponent<Props> = ({ report }) => {
  return (
    <div className="flex flex-1 flex-col justify-center">
      <h3 className="font-sans font-weight text-lg text-center py-4">{report.title}</h3>
      <Slider
        items={report.files.map((f, i) => (
          <Thumbnail file={f} key={i.toString()} full />
        ))}
      />

      <h3 className="text-base font-bold text-gray-500 py-3">Report information</h3>
      <div className="grid grid-cols-2 text-sm text-gray-500 gap-y-2">
        <span>Date</span>
        <span className="text-black text-opacity-80">
          {moment(report.date).format('DD MMM YYYY')}
        </span>

        <span>Time</span>
        <span className="text-black text-opacity-80">
          {moment(report.date).format('h:mm:ss A')}
        </span>

        <span>Size</span>
        <span className="text-black text-opacity-80">
          {filesize(report.files.reduce((p = 0, a) => a.size + p, 0))}
        </span>

        <span>Number of files</span>
        <span className="text-black text-opacity-80">{report.files.length}</span>

        <span>ID</span>
        <span className="text-black text-opacity-80">{report.id}</span>
      </div>
    </div>
  )
}
