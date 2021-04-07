import React, { FunctionComponent, PropsWithChildren } from 'react'
import cn from 'classnames'

type Props = {
  cond: boolean
}

export const LeftCollapsingSidebar: FunctionComponent<PropsWithChildren<Props>> = ({
  cond,
  children,
}) => (
  <div
    className={cn(
      'w-64 border-r px-6 pt-20 border-gray-100 transition-all transform duration-300 h-screen overflow-y-scroll fixed left-0 top-0',
      {
        '-translate-x-64': cond,
      }
    )}
  >
    {children}
  </div>
)
