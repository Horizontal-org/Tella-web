/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { FunctionComponent, useState } from 'react'
import cn from 'classnames'
import { Title, SubTitle } from '../Headers/Headers'

type Props = {
  title?: string
  subtitle?: string
  leftbar?: React.ReactNode
  rightbar?: React.ReactNode
}

export const MainLayout: FunctionComponent<Props> = ({ leftbar, rightbar, title, subtitle }) => {
  const [leftSidebarOpen, changeLeftSidebarOpneStatus] = useState(true)
  const [rightSidebarOpen, changeRightSidebarOpneStatus] = useState(true)

  const toggleLeftSideBar = () => changeLeftSidebarOpneStatus(!leftSidebarOpen)
  const toggleRightSideBar = () => changeRightSidebarOpneStatus(!rightSidebarOpen)

  return (
    <div className="flex w-full min-h-screen bg-white overflow-x-hidden">
      {leftbar && (
        <div
          className={cn(
            'w-56 md:flex border-r p-8 border-gray-100 transition-all transform duration-300 ease-in-out',
            {
              '-translate-x-56': !leftSidebarOpen,
            }
          )}
        >
          {leftbar}
        </div>
      )}
      <div
        className={cn('p-8 flex-1 transition-all duration-300 ease-in-out', {
          'transform -ml-56': !leftSidebarOpen,
          'transform -mr-56': !rightSidebarOpen,
        })}
      >
        <div className="py-4">
          {title && <Title>{title}</Title>}
          {subtitle && <SubTitle>{subtitle}</SubTitle>}
        </div>
        <div className="flex justify-between">
          {leftbar && (
            <img
              src="/images/handbar-toggle.png"
              alt="Toggle left sidebar"
              className="cursor-pointer"
              onClick={toggleLeftSideBar}
            />
          )}
          <div />
          {rightbar && (
            <img
              src="/images/handbar-toggle.png"
              alt="Toggle right sidebar"
              className="cursor-pointer transform rotate-180"
              onClick={toggleRightSideBar}
            />
          )}
        </div>
      </div>
      {rightbar && (
        <div
          className={cn(
            'w-56 md:flex border-l p-8 border-gray-100 transition-all transform duration-300 ease-in-out',
            {
              'translate-x-56': !rightSidebarOpen,
            }
          )}
        >
          {rightbar}
        </div>
      )}
    </div>
  )
}
