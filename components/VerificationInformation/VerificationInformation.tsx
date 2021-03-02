import { FunctionComponent } from 'react'
import { FileObj, DeviceObj, EnvironmentObj, Location } from '../../domain/Metadata'

type Props = {
  file?: FileObj
  device?: DeviceObj
  env?: EnvironmentObj
}

export const VerificationInformation: FunctionComponent<Props> = ({
  file = {},
  device = {},
  env = {},
}) => (
  <>
    <h3 className="text-base font-bold text-gray-500 py-3">File Information</h3>
    <div className="text-base font-bold text-gray-500">
      <div className="py-3">
        <span>File</span>
      </div>
      {file &&
        Object.entries(file).map(([key, value]) => (
          <div className="font-normal grid grid-cols-2 text-sm text-gray-500 gap-y-2 py-1">
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
          <div className="font-normal grid grid-cols-2 text-sm text-gray-500 gap-y-2 py-1">
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
          <div className="font-normal grid grid-cols-2 text-sm text-gray-500 gap-y-2 py-1">
            <span>{key}</span>
            <span className="text-black text-opacity-80">{value}</span>
          </div>
        ))}
    </div>
  </>
)
