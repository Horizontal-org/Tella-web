import { FunctionComponent } from 'react'
import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util, MarkerStyle    //objects
} from "react-openlayers";
import * as olProj from 'ol/proj';
import { FileObj, DeviceObj, EnvironmentObj, Location } from '../../domain/Metadata'
import { OpenMap } from './OpenMap'

type Props = {
  file?: FileObj,
  device?: DeviceObj,
  env?: EnvironmentObj,
  location?: Location
}

export const VerificationInformation: FunctionComponent<Props> = ({
  file = {},
  device = {},
  env = {},
  location = {}
}) => (
  <>
    <h3 className="text-center font-bold text-gray-500 py-3">File Information</h3>
    <div>
      <Map view={{center: olProj.default.fromLonLat([location.longitude,location.latitude]), zoom: 5}}>
          <Layers>
            <layer.Tile/>
          </Layers>
      </Map>
      </div>
    <div className="text-base font-bold text-gray-500 overflow-auto">
      <div className="py-3">
        <span>File</span>
      </div>
      {file &&
        Object.entries(file).map(([key, value]) => (
          <div className="font-normal grid grid-cols-2 text-sm text-gray-500 gap-y-2 py-1">
            <span>{key}</span>
            <span className="text-black text-opacity-80">{value}</span>
          </div>
        ))}
    </div>
    <div className="text-base font-bold text-gray-500">
      <div className="py-3">
        <span>Device</span>
      </div>
      {file &&
        Object.entries(device).map(([key, value]) => (
          <div className="font-normal grid grid-cols-2 text-sm text-gray-500 gap-y-2 py-1">
            <span>{key}</span>
            <span className="text-black text-opacity-80">{value}</span>
          </div>
        ))}
    </div>
    <div className="text-base font-bold text-gray-500">
      <div className="py-3">
        <span>Environment</span>
      </div>
      {file &&
        Object.entries(env).map(([key, value]) => (
          <div className="font-normal grid grid-cols-2 text-sm text-gray-500 gap-y-2 py-1">
            <span>{key}</span>
            <span className="text-black text-opacity-80">{value}</span>
          </div>
        ))}
    </div>
  </>
)
