import React, { FunctionComponent, PropsWithChildren } from 'react'

// can't use {} because of linting rules, but this is meant to be an empty obj
type Props = any

export const MainContent: FunctionComponent<PropsWithChildren<Props>> = ({ children }) => (
  <div id="content" className="px-20 py-16 flex-1 inline">
    {children}
  </div>
)
