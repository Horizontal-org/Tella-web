import { FunctionComponent } from 'react'
import { ConfigurationJSON } from '../domain/Configuration'

type Props = {
  configuration: ConfigurationJSON,
}

export const ConfigurationDetails: FunctionComponent<Props> = ({ configuration }) => (
  <>
    <h3 className="text-center font-bold text-gray-500 py-3">Configuration JSON</h3>
    <div>
      {JSON.stringify(configuration)}
    </div>
  </>
)
