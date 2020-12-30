import { FunctionComponent } from 'react'
import { Title, SubTitle } from '../Headers/Headers'

type Props = {
  title?: string
  subtitle?: string
  sidebar: React.ReactNode
}

export const MainLayout: FunctionComponent<Props> = ({ sidebar, title, subtitle }) => {
  return (
    <div className="flex w-screen h-screen bg-white">
      <div className="flex w-56 border-r border-gray-100 p-8">{sidebar}</div>
      <div className="p-8">
        {title && <Title>{title}</Title>}
        {subtitle && <SubTitle>{subtitle}</SubTitle>}
      </div>
    </div>
  )
}
