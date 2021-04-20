/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { FunctionComponent, useState } from 'react'
import QRCode from 'qrcode'
import { Configuration } from '../../proto/configuration'
import { Button } from '../Button/Button'

type Props = {
  configuration: Configuration
}

export const ConfigurationDetails: FunctionComponent<Props> = ({ configuration }) => {
  const [imageUrl, setImageUrl] = useState('')

  const generateQRCode = async () => {
    try {
      const val = Configuration.encode(configuration).finish()
      const response = await QRCode.toDataURL([{ data: val, mode: 'byte' }])
      setImageUrl(response)
    } catch (error) {
      // console.log(error)
    }
  }

  return (
    <div>
      <h3 className="text-center font-bold text-gray-500 py-3">Configuration JSON</h3>
      <div>
        <Button text="Generate QR Code" onClick={() => generateQRCode()} />
        {imageUrl ? <img src={imageUrl} alt="configuration QR code" /> : null}
      </div>
    </div>
  )
}
