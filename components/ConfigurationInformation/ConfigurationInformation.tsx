import { FunctionComponent } from 'react'
import moment from 'moment'
import { Configuration } from '../../domain/Configuration'
import { ItemInformation } from '../ItemInformation/ItemInformation'

type Props = {
  config: Configuration
}

export const ConfigurationInformation: FunctionComponent<Props> = ({ config }) => {
  const dict = {
    Created: moment(config.date).format('DD MMM YYYY'),
    Status: config.status,
    'Number of connections': config.connections.toString(),
    ID: config.id.toString(),
  }
  return (
    <>
      <ItemInformation title="Configuration information" dict={dict} />
    </>
  )
}
