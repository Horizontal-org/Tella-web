import { storiesOf } from '@storybook/react'
import { VerificationInformation } from './VerificationInformation'
import {FileObj, DeviceObj, EnvironmentObj, Location} from '../../domain/Metadata'
import { FileMokedData, DeviceMokedData, EnvMokedData, LocationMokedData } from '../../moked/metadata'

storiesOf('Verification Information', module).add('Verification Information', () => {

  return (
    <div className="w-96 p-2">
      <VerificationInformation file={FileMokedData} device={DeviceMokedData}
        env={EnvMokedData} location={LocationMokedData}/>
    </div>
  )
})
