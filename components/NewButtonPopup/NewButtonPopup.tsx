import React, { FunctionComponent, PropsWithChildren, useState } from 'react'
import cn from 'classnames'
import { MdAdd } from '@react-icons/all-files/md/MdAdd'
import { MdClose } from '@react-icons/all-files/md/MdClose'
import { Button } from '../Button/Button'

type Props = {
  disabled?: boolean
}

export const NewButtonPopup: FunctionComponent<PropsWithChildren<Props>> = ({
  disabled,
  children,
}) => {
  const [popupOpen, changePopupStatus] = useState(false)

  const togglePopup = () => changePopupStatus(!popupOpen)

  return (
    <>
      <Button icon={<MdAdd />} text="New" disabled={disabled} onClick={togglePopup} />
      <div
        className={cn('bg-black bg-opacity-50 absolute inset-0 justify-center items-center', {
          hidden: !popupOpen,
          flex: popupOpen,
        })}
      >
        <div className="bg-white font-thin w-4/12 py-2 px-3 rounded shadow-xl text-gray-800">
          <div className="flex-start items-center">
            <button type="button" onClick={togglePopup}>
              <MdClose className="text-gray-300" />
            </button>
          </div>

          <div>{children}</div>
        </div>
      </div>
    </>
  )
}
