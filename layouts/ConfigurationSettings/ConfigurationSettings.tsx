/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FunctionComponent, useState } from 'react'
import cn from 'classnames'
import { MdRemoveRedEye } from '@react-icons/all-files/md/MdRemoveRedEye'
import { MdDelete } from '@react-icons/all-files/md/MdDelete'
import { Button } from '../../components/Button/Button'
import { ButtonMenu } from '../../components/ButtonMenu/ButtonMenu'
import { ButtonOption } from '../../components/ButtonMenu/ButtonOption'
import { TopBar } from '../../components/TopBar/TopBar'
import { Configuration } from '../../domain/Configuration'
import { ConfigurationInformation } from '../../components/ConfigurationInformation/ConfigurationInformation'
import { AppLockComponentLayout } from '../AppLockComponent/AppLockComponentLayout'

type Props = {
  config: Configuration
}

export const ConfigurationSettingsLayout: FunctionComponent<Props> = ({ config }) => {
  const [leftSidebarOpen, changeLeftSidebarOpneStatus] = useState(true)
  const [rightSidebarOpen, changeRightSidebarOpneStatus] = useState(true)

  const toggleLeftSideBar = () => changeLeftSidebarOpneStatus(!leftSidebarOpen)
  const toggleRightSideBar = () => changeRightSidebarOpneStatus(!rightSidebarOpen)

  return (
    <div className="flex flex-grow min-h-screen">
      <div
        className={cn(
          'w-64 border-r px-6 pt-20 border-gray-100 transition-all transform duration-300 h-screen overflow-y-scroll fixed left-0 top-0',
          {
            '-translate-x-64': !leftSidebarOpen,
          }
        )}
      >
        <ConfigurationInformation config={config} />
      </div>

      <div
        className={cn('flex flex-col flex-1 pt-20 transition-all duration-300 ease-in-out', {
          'transform ml-64': leftSidebarOpen,
          'transform mr-64': rightSidebarOpen,
        })}
      >
        <div id="slider-bar" className="flex px-4">
          <div>
            <img
              src="/images/handbar-toggle.png"
              alt="Toggle left sidebar"
              className="cursor-pointer border-r my-2 py-1 pr-3"
              onClick={toggleLeftSideBar}
            />
          </div>

          <div className="flex-1 flex justify-between" />

          <div>
            <img
              src="/images/handbar-toggle.png"
              alt="Toggle right sidebar"
              className="cursor-pointer transform rotate-180 border-r my-2 py-1 pr-3"
              onClick={toggleRightSideBar}
            />
          </div>
        </div>

        <div id="content" className="px-20 py-16 flex-1 flex">
          <AppLockComponentLayout />
        </div>
      </div>
      <div
        className={cn(
          'w-64 border-l px-6 pt-20 border-gray-100 transition-all transform duration-300 h-screen overflow-y-scroll fixed right-0 top-0',
          {
            'translate-x-64': !rightSidebarOpen,
          }
        )}
      />

      <TopBar title={config.name}>
        <ButtonMenu openSide="left">
          <ButtonOption icon={<MdDelete />} text="Delete" color="#D6933B" />
        </ButtonMenu>
        <Button icon={<MdRemoveRedEye />} text="Preview" />
      </TopBar>
    </div>
  )
}
