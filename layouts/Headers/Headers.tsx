import { FunctionComponent } from 'react'

export const Title: FunctionComponent = ({ children }) => (
  <h1 className="font-osans font-bold text-xxl text-gray-600">{children}</h1>
)

export const SubTitle: FunctionComponent = ({ children }) => (
  <h2 className="font-osans font-normal text-base text-gray-600">{children}</h2>
)
