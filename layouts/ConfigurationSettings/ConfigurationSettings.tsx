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
import { AppLockConfig, CamouflageConfig, Configuration } from '../../domain/Configuration'
import { ConfigurationInformation } from '../../components/ConfigurationInformation/ConfigurationInformation'
import { LeftCollapsingSidebar } from '../../components/CollapsingSidebar/LeftCollapsingSidebar'
import { MainContent } from '../../components/MainContent/MainContent'
import { ToggleButtonsBar } from '../../components/ToggleButtonsBar/ToggleButtonsBar'
import { ConfigSelect } from '../../components/ConfigSelect/ConfigSelect'
import { AppLock } from '../../components/AppLock/AppLock'
import { CamouflageWizard } from '../../components/CamouflageWizard/CamouflageWizard'

type Props = {
  config: Configuration
  onChange: (changes: Partial<Configuration>) => void
}

enum Mode {
  BASE,
  APPLOCK,
  CAMOUFLAGE,
}

export const ConfigurationSettingsLayout: FunctionComponent<Props> = ({ config, onChange }) => {
  const [mode, setMode] = useState(Mode.BASE)
  const [leftSidebarOpen, changeLeftSidebarOpenStatus] = useState(true)
  const [rightSidebarOpen, changeRightSidebarOpenStatus] = useState(true)

  const setModeBase = () => setMode(Mode.BASE)
  const setModeApplock = () => setMode(Mode.APPLOCK)
  const setModeCamouflage = () => setMode(Mode.CAMOUFLAGE)

  const toggleLeftSideBar = () => changeLeftSidebarOpenStatus(!leftSidebarOpen)
  const toggleRightSideBar = () => changeRightSidebarOpenStatus(!rightSidebarOpen)

  const saveAppLock = (applock: AppLockConfig) => {
    onChange({ applock })
    setModeBase()
  }

  const saveCamouflage = (camouflage: CamouflageConfig) => {
    onChange({ camouflage })
    setModeBase()
  }

  return (
    <div className="flex flex-grow min-h-screen">
      <LeftCollapsingSidebar collapsed={!leftSidebarOpen}>
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
            <AppLock config={config} goPrev={setModeBase} goNext={saveAppLock} />
          ) : mode === Mode.CAMOUFLAGE ? (
            <CamouflageWizard config={config} goPrev={setModeBase} goNext={saveCamouflage} />
          ) : (
            <ConfigSelect
              options={[
                {
                  title: 'App Lock',
                  description: 'Pattern and PIN available',
                  onClick: setModeApplock,
                },
                {
                  title: 'Camouflage',
                  description: 'Change name + icon and Calculator available',
                  onClick: setModeCamouflage,
                },
              ]}
            />
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
        {/* These buttons aren't correct for Configuration, just copied from
          the Report Details page. They will need to be changed. */}
        <ButtonMenu openSide="left">
          <ButtonOption icon={<MdDelete />} text="Delete" color="#D6933B" />
        </ButtonMenu>
        <Button icon={<MdRemoveRedEye />} text="Preview" />
      </TopBar>
    </div>
  )
}
