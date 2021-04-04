import React, { FunctionComponent, PropsWithChildren } from 'react'
import { MdClose } from '@react-icons/all-files/md/MdClose'

type Props = {
  title: string
}

export const TopBar: FunctionComponent<PropsWithChildren<Props>> = ({ title, children }) => (
  <div className="px-8 py-5 w-full border-b border-gray-100 flex font-xl items-center justify-items-start fixed top-0 right-0 bg-white justify-between">
    <div className="flex items-center">
      <button type="button">
        <MdClose className="text-gray-300" />
      </button>
      <h2 className="text-gray-500 font-bold px-4">{title}</h2>
    </div>
    <div className="flex space-x-2">{children}</div>
  </div>
)
