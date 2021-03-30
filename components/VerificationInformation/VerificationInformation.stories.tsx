import { storiesOf } from '@storybook/react'
import { VerificationInformation } from './VerificationInformation'
import { FileMokedData, DeviceMokedData, EnvMokedData } from '../../moked/verificationData'

storiesOf('Verification Information', module).add('Verification Information', () => {
  return (
    <div className="w-96 p-2">
      <VerificationInformation file={FileMokedData} device={DeviceMokedData} env={EnvMokedData} />
    </div>
  )
})
