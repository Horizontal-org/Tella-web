/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { FunctionComponent, useEffect, useState } from 'react'
import cn from 'classnames'
import { Title, SubTitle } from '../../components/Headers/Headers'
import { Item } from '../../domain/Item'

type Props = {
  title?: string
  subtitle?: string
  leftbar?: React.ReactNode
  rightbar?: React.ReactNode
  content: React.ReactNode
  currentItem?: Item
  onClosePreview?: () => void
}

export const MainLayout: FunctionComponent<Props> = ({
  content,
  leftbar,
  rightbar,
  title,
  subtitle,
  currentItem,
  onClosePreview,
}) => {
  const [leftSidebarOpen, changeLeftSidebarOpenStatus] = useState(true)
  const [rightSidebarOpen, changeRightSidebarOpenStatus] = useState(false)

  const toggleLeftSideBar = () => changeLeftSidebarOpenStatus(!leftSidebarOpen)
  const toggleRightSideBar = () => changeRightSidebarOpenStatus(!rightSidebarOpen)

  useEffect(() => {
    if (currentItem) changeRightSidebarOpenStatus(true)
  }, [currentItem])

  useEffect(() => {
    if (rightSidebarOpen === false && onClosePreview) {
      onClosePreview()
    }
  }, [rightSidebarOpen])

  return (
    <div className="flex w-full min-h-screen bg-white overflow-x-hidden">
      {leftbar && (
        <div
          className={cn(
            'w-56 md:flex border-r p-8 border-gray-100 transition-all transform duration-300 ease-in-out h-screen fixed top-0 left-0',
            {
              '-translate-x-56': !leftSidebarOpen,
            }
          )}
        >
          {leftbar}
        </div>
      )}
      <div
        className={cn('p-6 flex-1 transition-all duration-300 ease-in-out', {
          'transform ml-56': leftbar && leftSidebarOpen,
          'transform mr-64': rightbar && rightSidebarOpen,
        })}
      >
        <div className="py-4">
          {title && <Title>{title}</Title>}
          {subtitle && <SubTitle>{subtitle}</SubTitle>}
        </div>
        <div className="flex">
          {leftbar && (
            <div>
              <img
                src="/images/handbar-toggle.png"
                alt="Toggle left sidebar"
                className="cursor-pointer border-r my-2 py-1 pr-3"
                onClick={toggleLeftSideBar}
              />
            </div>
          )}
          <div className="flex-1">{content}</div>
          {currentItem && rightbar && (
            <div>
              <img
                src="/images/handbar-toggle.png"
                alt="Toggle right sidebar"
                className="cursor-pointer transform rotate-180 border-r my-2 py-1 pr-3"
                onClick={toggleRightSideBar}
              />
            </div>
          )}
        </div>
      </div>
      {rightbar && (
        <div
          className={cn(
            'w-64 flex border-l p-5 border-gray-100 transition-all transform duration-300 ease-in-out h-screen fixed right-0 top-0',
            {
              'translate-x-64': !rightSidebarOpen,
            }
          )}
        >
          {rightbar}
        </div>
      )}
    </div>
  )
}
