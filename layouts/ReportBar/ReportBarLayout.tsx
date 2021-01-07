import React, { FunctionComponent } from 'react'
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
    </div>
  )
}
