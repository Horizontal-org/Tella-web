import React, { FunctionComponent } from 'react'
import { layer, Map, Layers } from "react-openlayers"
import * as olProj from 'ol/proj';
import { Location } from '../../domain/Metadata'

type Props = {
  longitude: int,
  latitude: int
}

export const VerificationMap: FunctionComponent<Props> = ({ longitude, latitude }) => {
  return (
    <div>
      <Map view={{center: olProj.default.fromLonLat([longitude,latitude]), zoom: 5}}>
          <Layers>
            <layer.Tile/>
          </Layers>
      </Map>
    </div>
  )

}
