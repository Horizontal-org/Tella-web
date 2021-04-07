import React, { FunctionComponent, PropsWithChildren } from 'react'
import cn from 'classnames'

type Props = {
  cond: boolean
}

// For reasons I don't know why, the transform part of this is currently broken
// The y translation property seems to prevent proper display?

export const RightCollapsingSidebar: FunctionComponent<PropsWithChildren<Props>> = ({
  cond,
  children,
}) => (
  <div
    className={cn(
      'w-64 border-l px-6 pt-20 border-gray-100 transition-all transform duration-300 h-screen overflow-y-scroll fixed right-0 top-0',
      {
        'translate-x-64': { cond },
      }
    )}
  >
    {children}
  </div>
)
