/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FunctionComponent } from 'react'
import { MdEdit } from '@react-icons/all-files/md/MdEdit'

type Props = {
  appLockCB: () => void
  camouflageCB: () => void
}

export const ConfigSelect: FunctionComponent<Props> = ({ appLockCB, camouflageCB }) => {
  return (
    <div className="w-96 fixed inset-y-1/3 inset-x-1/3">
      <p className="font-sans  font-bold text-xxxl"> Configuration </p>
      <div className="w-96 h-20 rounded-xl bg-gray-200  hover:bg-gray-100">
        <p className="m-7 mb-0 pt-2.5 font-bold text-gray-700"> App Lock</p>
        <p className="m-7 mt-xsm pb-10 text-sm text-gray-500 inline-block">
          {' '}
          Pattern and PIN available
        </p>
        <button className="-pt-xxxsm right-4 inline absolute" type="button" onClick={appLockCB}>
          <MdEdit className="text-gray-300" />
        </button>
      </div>

      <div className="w-96 h-20 rounded-xl bg-gray-200  hover:bg-gray-100">
        <p className="m-7 mb-0 pt-2.5 font-bold text-gray-700"> Camouflage</p>
        <p className="m-7 mt-xsm pb-10 text-sm text-gray-500 inline-block">
          {' '}
          Change name + icon and Calculator available
        </p>
        <button className="-pt-xxxsm right-4 inline absolute" type="button" onClick={camouflageCB}>
          <MdEdit className="text-gray-300" />
        </button>
      </div>
    </div>
  )
}
