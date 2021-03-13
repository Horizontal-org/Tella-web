import { FunctionComponent } from 'react'
import { Configuration } from '../../proto/configuration'

type Props = {
  configuration: Configuration,
}

export const ConfigurationDetails: FunctionComponent<Props> = ({ configuration }) => (
  <>
    <h3 className="text-center font-bold text-gray-500 py-3">Configuration JSON</h3>
    <div>
      {JSON.stringify(Configuration.toJSON(configuration))}
    </div>
  </>
)
