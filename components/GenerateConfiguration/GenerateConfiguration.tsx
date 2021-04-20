/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { FunctionComponent, useState, useEffect } from 'react'
import QRCode from 'qrcode'
import placeholder from './placeholder.png'
import { Configuration } from '../../proto/configuration'
import { Title, SubTitle } from '../Headers/Headers'
import { Button, btnType } from '../Button/Button'

type Props = {
  configuration: Configuration
  name: string
}

export const GenerateConfiguration: FunctionComponent<Props> = ({
  configuration = {},
  name = 'A name would go here',
}) => {
  const [imageUrl, setImageUrl] = useState('')

  const generateQRCode: Promise<void> = async () => {
    try {
      const val = Configuration.encode(configuration).finish()
      const response = await QRCode.toDataURL([{ data: val, mode: 'byte' }])
      setImageUrl(response)
    } catch (error) {
      // console.log(error)
    } finally {
      // console.log('Qr code generated.')
    }
  }

  const downloadQRCode = () => {
    let element = document.createElement('a')
    element.setAttribute('href', imageUrl)
    element.setAttribute('download', `${name}.png`)

    element.style.display = 'none'
    document.body.appendChild(element)

    element.click()

    document.body.removeChild(element)
  }

  const printQRCode = () => {
    let image = new Image()
    image.src = imageUrl

    let w = window.open('', '_blank', 'width=300,height=300')
    w.document.write(image.outerHTML)
    w.print()
    w.document.close()
  }

  const downloadConfigurationFile = () => {
    const val = Configuration.encode(configuration).finish()
    let element: HTMLElement = document.createElement('a')
    element.setAttribute('href', `data:text/plain;charset=utf-8,${String(val)}`)
    element.setAttribute('download', `${name}.txt`)

    element.style.display = 'none'
    document.body.appendChild(element)

    element.click()

    document.body.removeChild(element)
  }

  useEffect(() => {
    generateQRCode()
  }, [])

  return (
    <div>
      <div className="pb-8 space-y-1">
        <Title>{name}</Title>
        <SubTitle>
          Use one of the following methods to share the configuration with your users.
        </SubTitle>
      </div>
      <div className="flex flex-row text-center divide-x divide-gray-400 justify-items-center">
        <div className="flex-1 flex flex-col p-4 space-y-4">
          <h3 className="text-base font-bold text-gray-500 py-3 text-xl">Config Code</h3>
          <p className="text-base text-gray-500 py-3">
            Entering this code in Tella will apply the configuration.
          </p>
          <img src={String(placeholder)} alt="placeholder" />
          <div className="flex flex-row space-x-4 justify-center">
            <Button text="Enable" type={btnType.Secondary} />
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center item-center p-4 space-y-4">
          <h3 className="text-base font-bold text-gray-500 py-3 text-xl">QR Code</h3>
          <p className="text-base text-gray-500 py-3">
            Using Tella to scan this QR code will apply the configuration.
          </p>
          {imageUrl ? <img src={imageUrl} alt="configuration QR code" /> : null}
          <div className="flex flex-row space-x-4 justify-center">
            <Button text="Download" type={btnType.Secondary} onClick={() => downloadQRCode()} />
            <Button text="Print" type={btnType.Secondary} onClick={() => printQRCode()} />
          </div>
        </div>
        <div className="flex-1 flex-col p-4 space-y-4">
          <h3 className="text-base font-bold text-gray-500 py-3 text-xl">Config File</h3>
          <p className="text-base text-gray-500 py-3">
            Share the file with your users. Uploading it into Tella will apply the configuration.
          </p>
          <img src={String(placeholder)} alt="placeholder" />
          <div className="flex flex-row space-x-4 justify-center">
            <Button
              text="Download"
              type={btnType.Secondary}
              onClick={() => downloadConfigurationFile()}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
