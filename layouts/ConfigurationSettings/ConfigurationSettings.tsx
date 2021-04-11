/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
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
import { LeftCollapsingSidebar } from '../../components/CollapsingSidebar/LeftCollapsingSidebar'
import { MainContent } from '../../components/MainContent/MainContent'
import { RightCollapsingSidebar } from '../../components/CollapsingSidebar/RightCollapsingSidebar'
import { ToggleButtonsBar } from '../../components/ToggleButtonsBar/ToggleButtonsBar'
import { ConfigSelect } from '../../components/ConfigSelect/ConfigSelect'
import { CamouflageLayout } from '../Camouflage/CamouflageLayout'

type Props = {
  config: Configuration
}

enum Mode {
  BASE,
  APPLOCK,
  CAMOUFLAGE,
}

export const ConfigurationSettingsLayout: FunctionComponent<Props> = ({ config }) => {
  const [mode, setMode] = useState(Mode.BASE)
  const [leftSidebarOpen, changeLeftSidebarOpneStatus] = useState(true)
  const [rightSidebarOpen, changeRightSidebarOpneStatus] = useState(true)

  const setModeBase = () => setMode(Mode.BASE)
  const setModeApplock = () => setMode(Mode.APPLOCK)
  const setModeCamouflage = () => setMode(Mode.CAMOUFLAGE)

  const toggleLeftSideBar = () => changeLeftSidebarOpneStatus(!leftSidebarOpen)
  const toggleRightSideBar = () => changeRightSidebarOpneStatus(!rightSidebarOpen)

  return (
    <div className="flex flex-grow min-h-screen">
      <LeftCollapsingSidebar cond={!leftSidebarOpen}>
        <ConfigurationInformation config={config} />
      </LeftCollapsingSidebar>

      <div
        className={cn('flex flex-col flex-1 pt-20 transition-all duration-300 ease-in-out', {
          'transform ml-64': leftSidebarOpen,
          'transform mr-64': rightSidebarOpen,
        })}
      >
        <ToggleButtonsBar leftToggle={toggleLeftSideBar} rightToggle={toggleRightSideBar} />

        <MainContent>
          {mode === Mode.APPLOCK ? (
            <AppLockComponentLayout goPrev={setModeBase} goNext={setModeCamouflage} />
          ) : mode === Mode.CAMOUFLAGE ? (
            <CamouflageLayout goPrev={setModeApplock} goNext={setModeBase} />
          ) : (
            <ConfigSelect appLockCB={setModeApplock} camouflageCB={setModeCamouflage} />
          )}
        </MainContent>
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
