import { CSSProperties, FunctionComponent } from 'react'
import cn from 'classnames'
import { MdHeadset } from '@react-icons/all-files/md/MdHeadset'
import { MdVideocam } from '@react-icons/all-files/md/MdVideocam'
import { MdInsertDriveFile } from '@react-icons/all-files/md/MdInsertDriveFile'
import { ReportFile, ReportFileType } from '../../domain/ReportFile'

type Props = {
  file: ReportFile
  onClick?: () => void
}

export const Thumbnail: FunctionComponent<Props> = ({ file, onClick }) => {
  const icon = ((type: keyof typeof ReportFileType) => {
    switch (type) {
      case 'audio':
        return (
          <div className="m-auto">
            <MdHeadset size={25} color="#8B8E8F" />
          </div>
        )
      case 'video':
        return (
          <div className="m-auto bg-black opacity-70 p-2 rounded-sm">
            <MdVideocam size={25} color="#ffffff" />
          </div>
        )
      case 'file':
        return (
          <div className="m-auto">
            <MdInsertDriveFile size={25} color="#8B8E8F" />
          </div>
        )
      default:
        return null
    }
  })(file.type)

  const getBackgroundImage = (thumbnail?: string): CSSProperties => {
    return thumbnail
      ? {
          backgroundImage: `url(${thumbnail})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }
      : {}
  }

  return (
    <div
      onClick={onClick}
      className={cn('w-28 h-28 bg-gray-100 rounded', {
        'cursor-pointer': onClick !== null,
      })}
      aria-hidden="true" // TODO: a11y
    >
      <div
        style={getBackgroundImage(file.thumbnail)}
        className="hover:bg-opacity-5 hover:bg-black w-28 h-28 flex content-center flex-wrap rounded-md border border-gray-300 hover:border-gray-400"
      >
        {icon}
      </div>
    </div>
  )
}

Thumbnail.defaultProps = {
  onClick: null,
}
