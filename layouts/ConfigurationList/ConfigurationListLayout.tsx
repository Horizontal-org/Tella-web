import {
  Dispatch,
  FormEvent,
  FunctionComponent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'
import { MdOpenInNew } from '@react-icons/all-files/md/MdOpenInNew'
import { MdRemoveRedEye } from '@react-icons/all-files/md/MdRemoveRedEye'
import { MdSave } from '@react-icons/all-files/md/MdSave'
import { MdDelete } from '@react-icons/all-files/md/MdDelete'
import { btnType, Button } from '../../components/Button/Button'
import { SidebarLayout } from '../../components/Sidebar/SidebarLayout'
import { Table } from '../../components/Table/Table'
import { TopMenuMokedData, BottomMenuMokedData } from '../../moked/configmenu'
import { MainLayout } from '../Main/MainLayout'
import { CONFIG_COLUMNS } from '../../domain/ConfigurationTableColumns'
import { ButtonMenu } from '../../components/ButtonMenu/ButtonMenu'
import { ButtonOption } from '../../components/ButtonMenu/ButtonOption'
import { ItemQuery } from '../../domain/ItemQuery'
import { SearchInput } from '../../components/Inputs/SearchInput/SearchInput'
import { Configuration } from '../../domain/Configuration'
import { Item } from '../../domain/Item'
import { CreateConfigPopup } from '../CreateConfigPopup/CreateConfigPopup'

type Props = {
  configs?: Configuration[]
  loadConfigurations: (itemQuery: ItemQuery) => void
  onDelete: (configuration: Configuration[]) => void
  onOpenConfiguration: (configuration: Configuration) => void
}

export const ConfigurationListLayout: FunctionComponent<Props> = ({
  configs,
  loadConfigurations,
  onDelete,
  onOpenConfiguration,
}) => {
  const [currentConfiguration, setCurrentConfiguration] = useState<Configuration | undefined>()
  const [selectedConfigurations, setSelectedConfigurations] = useState<Configuration[]>([])
  const [currentConfigurationQuery, setConfigurationQuery] = useState<ItemQuery>({
    pagination: {
      page: 1,
      total: 1,
      size: 1,
    },
    sort: [],
    filter: {},
  })
  const searchInput = useRef<HTMLInputElement>()

  const openConfiguration = () => {
    setCurrentConfiguration(selectedConfigurations[0])
  }

  const search = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const name = searchInput.current.value
    setConfigurationQuery({
      ...currentConfigurationQuery,
      filter: {
        byName: name,
      },
    })
  }

  useEffect(() => {
    loadConfigurations(currentConfigurationQuery)
  }, [currentConfigurationQuery])

  return (
    <MainLayout
      title="Remote Configurations"
      subtitle="All configurations created for your users"
      content={
        <div>
          <div className="flex h-10 space-x-2 mb-2 p-2">
            <CreateConfigPopup createCB={() => undefined} />
            {selectedConfigurations.length === 0 && (
              <form onSubmit={search} className="flex">
                <SearchInput
                  ref={searchInput}
                  defaultValue={currentConfigurationQuery.filter?.byName}
                />
              </form>
            )}
            {selectedConfigurations.length > 0 && (
              <>
                {selectedConfigurations.length === 1 && (
                  <>
                    <Button
                      icon={<MdOpenInNew />}
                      text="Open"
                      onClick={() => {
                        onOpenConfiguration(selectedConfigurations[0])
                      }}
                    />
                    <Button
                      type={btnType.Secondary}
                      icon={<MdRemoveRedEye />}
                      text="Preview"
                      onClick={openConfiguration}
                    />
                  </>
                )}
                <Button type={btnType.Secondary} icon={<MdSave />} text="Download" />
                <ButtonMenu openSide="right">
                  <ButtonOption
                    icon={<MdDelete />}
                    text="Delete"
                    color="#D6933B"
                    onClick={() => onDelete(selectedConfigurations)}
                  />
                </ButtonMenu>
              </>
            )}
          </div>
          <Table
            columns={CONFIG_COLUMNS}
            data={configs}
            itemQuery={currentConfigurationQuery}
            onSelection={setSelectedConfigurations as Dispatch<SetStateAction<Item[]>>}
            onFetch={setConfigurationQuery}
          />
        </div>
      }
      leftbar={<SidebarLayout topMenu={TopMenuMokedData} bottomMenu={BottomMenuMokedData} />}
      onClosePreview={() => setCurrentConfiguration(undefined)}
      currentItem={currentConfiguration}
    />
  )
}

ConfigurationListLayout.defaultProps = {
  configs: [],
}
