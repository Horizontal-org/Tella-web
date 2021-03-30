import { FunctionComponent } from 'react'
import { File } from '../../domain/File'
import { Device } from '../../domain/Device'
import { Environment } from '../../domain/Environment'
import { VerificationMap } from './VerificationMap'

type Props = {
  file: File
  device: Device
  env: Environment
}

export const VerificationInformation: FunctionComponent<Props> = ({
  file = {},
  device = {},
  env = {},
}) => (
  <>
    <h3 className="text-center font-bold text-gray-500 py-3">File Information</h3>
    {env && <VerificationMap longitude={env.longitude} latitude={env.latitude} />}
    <div className="text-base font-bold text-gray-500 break-words">
      <div className="py-3">
        <span>File</span>
      </div>
      {file &&
        Object.entries(file).map(([key, value]) => (
          <div
            className="font-normal grid grid-cols-2 text-sm text-gray-500 gap-y-2 py-1"
            key={key}
          >
            <span>{key}</span>
            <span className="text-black text-opacity-80">{value}</span>
          </div>
        ))}
    </div>
    <div className="text-base font-bold text-gray-500">
      <div className="py-3">
        <span>Device</span>
      </div>
      {file &&
        Object.entries(device).map(([key, value]) => (
          <div
            className="font-normal grid grid-cols-2 text-sm text-gray-500 gap-y-2 py-1"
            key={key}
          >
            <span>{key}</span>
            <span className="text-black text-opacity-80">{value}</span>
          </div>
        ))}
    </div>
    <div className="text-base font-bold text-gray-500">
      <div className="py-3">
        <span>Environment</span>
      </div>
      {file &&
        Object.entries(env).map(([key, value]) => (
          <div
            className="font-normal grid grid-cols-2 text-sm text-gray-500 gap-y-2 py-1"
            key={key}
          >
            <span>{key}</span>
            <span className="text-black text-opacity-80">{value}</span>
          </div>
        ))}
    </div>
  </>
)
