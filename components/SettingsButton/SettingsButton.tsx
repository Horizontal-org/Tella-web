/* eslint-disable no-param-reassign */
import { FunctionComponent, useEffect, useState } from 'react'
import cn from 'classnames'

type Props = {
  itemSettings: boolean[]
  id: number
  type: string
  description: string
}

export const SettingsButton: FunctionComponent<Props> = ({
  itemSettings,
  id,
  type,
  description,
}) => {
  const [selected, updateSelected] = useState(itemSettings[id])

  useEffect(() => {
    itemSettings[id] = selected
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
      <p className="block font-bold font-medium items-center justify-center text-center mt-6">
        {' '}
        {type}{' '}
      </p>
      <div className="block ml-auto mr-auto w-6/12">
        <img src="/icon.png" className="mt-xsm mb-md" alt="icon" />
      </div>
      <p className="block font-light text-base text-center mt-15"> {description} </p>
    </div>
  )
}
