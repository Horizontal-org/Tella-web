import { storiesOf } from '@storybook/react'
import { VerificationInformation } from './VerificationInformation'
import {FileObj, DeviceObj, EnvironmentObj, Location} from '../../domain/Metadata'

storiesOf('Verification Information', module).add('Verification Information', () => {
  const testFile: FileObj = {path: "this_is_a_path", hash: 1234}
  
  return (
    <div className="w-64 p-2">
      <VerificationInformation file={testFile}/>
    </div>
  )
})
