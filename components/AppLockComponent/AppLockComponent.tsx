import { FunctionComponent, CSSProperties, useEffect, useState } from 'react'
import cn from 'classnames'

const imageStyle: CSSProperties = {
  marginTop: '13px',
  marginBottom: '30px',
}

type Props = {
  id: number
  type: string
  description: string
  callback: (id: boolean) => void
}

export const AppLockComponent: FunctionComponent<Props> = ({
  id = 0,
  type = 'Password',
  description = 'The user picks a new name and icon',
  callback,
}) => {
  const [selected, updateSelected] = useState(false)

  useEffect(() => {
    // console.log(type)
    // console.log(selected)
    callback(selected)
  }, [selected])

  const handleClick = () => {
    updateSelected(!selected)
  }

  return (
    <div
      aria-hidden="true"
      onClick={() => handleClick()}
      className={cn('w-48 h-60 bg-gray-25 font-sans rounded-lg text-centear hover:bg-gray-100', {
        'bg-gray-100 border-blue-100 border': selected,
      })}
    >
      <p className="block font-bold font-medium items-center justify-center text-center mt-6 ">
        {' '}
        {type}{' '}
      </p>
      {/* <img className="block ml-auto mr-auto w-6/12" src={icon} /> */}
      <div className="block ml-auto mr-auto w-6/12">
        <img src="/icon.png" style={imageStyle} alt="icon" />
      </div>
      <p className="block font-light text-base text-center mt-15"> {description} </p>
    </div>
  )
}
