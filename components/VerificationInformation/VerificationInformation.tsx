import { FunctionComponent } from 'react'

type Props = {
  file: FileObj,
  device: DeviceObj,
  env: EnvironmentObj
}

export const VerificationInformation: FunctionComponent<Props> = ({ file, device, env }) => (
  <>
    <h3 className="text-base font-bold text-gray-500 py-3">Verification Information</h3>
    <div className="">
        <span>Information about the file</span>
        {file.map((data) => (
            <div>
                <span>{data.title}</span>
                <span>{data.value}</span>
            </div>
        ))}
    </div>
    <div className="">
        <span>Information about the device</span>
        {device.map((data) => (
            <div>
                <span>{data.title}</span>
                <span>{data.value}</span>
            </div>
        ))}
    </div>
    <div className="">
        <span>Information about the environment where the file was captured</span>
        {env.map((data) => (
            <div>
                <span>{data.title}</span>
                <span>{data.value}</span>
            </div>
        ))}
    </div>
  </>
)
