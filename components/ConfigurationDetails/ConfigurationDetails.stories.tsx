import { storiesOf } from '@storybook/react'
import { MokedJSON } from '../../moked/configuration'
import { ConfigurationDetails } from './ConfigurationDetails'

storiesOf('ConfigurationDetails', module).add('ConfigurationDetails', () => {

  return (
    <div className="w-auto p-2">
      <ConfigurationDetails configuration={MokedJSON} />
    </div>
  )
})
