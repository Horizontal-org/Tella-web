/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// The map API needs these to pass eslint
import React, { FunctionComponent } from 'react'
import { layer, Map, Layers } from 'react-openlayers'
import { fromLonLat } from 'ol/proj'

type Props = {
  longitude: number
  latitude: number
}

export const VerificationMap: FunctionComponent<Props> = ({ longitude, latitude }) => {
  return (
    <div>
      <Map view={{ center: fromLonLat([longitude, latitude]), zoom: 5 }}>
        <Layers>
          <layer.Tile />
        </Layers>
      </Map>
    </div>
  )
}
