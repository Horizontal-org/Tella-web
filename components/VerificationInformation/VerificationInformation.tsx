import { FunctionComponent } from 'react'
import {FileObj, DeviceObj, EnvironmentObj, Location} from '../../domain/Metadata'

type Props = {
  file?: FileObj,
  device?: DeviceObj,
  env?: EnvironmentObj
}

export const VerificationInformation: FunctionComponent<Props> = ({ file, device, env }) => (
  <>
    <h3 className="text-base font-bold text-gray-500 py-3">Verification Information</h3>
    <div className="">
        <span>Information about the file</span>
        {file && (Object.entries(file).map(([key, value]) =>
          <div>
              <span>{key}</span>: <span>{value}</span>
          </div>
        ))}
    </div>
    <div className="">
        <span>Information about the device</span>
        {device && (Object.entries(device).map(([key, value]) =>
          <div>
              <span>{key}</span>: <span>{value}</span>
          </div>
        ))}
    </div>
    <div className="">
        <span>Information about the environment where the file was captured</span>
        {env && (Object.entries(env).map(([key, value]) =>
          <div>
              <span>{data.title}</span>
              <span>{data.value}</span>
          </div>
        ))}
    </div>
  </>
)
