import { storiesOf } from '@storybook/react'
import { VerificationInformation } from './VerificationInformation'
import {FileObj, DeviceObj, EnvironmentObj, Location} from '../../domain/Metadata'
import { MetadataMokedData } from '../../moked/metadata'

storiesOf('Verification Information', module).add('Verification Information', () => {

  return (
    <div className="w-64 p-2">
      <VerificationInformation file={MetadataMokedData}/>
    </div>
  )
})
