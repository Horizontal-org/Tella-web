/* eslint-disable no-alert */
import { storiesOf } from '@storybook/react'
import { MainLayout } from './MainLayout'
import { SidebarLayout } from '../Sidebar/SidebarLayout'
import { TopMenuMokedData, BottomMenuMokedData } from '../../moked/menu'

storiesOf('Layouts', module).add('Main', () => {
  return (
    <MainLayout
      title="Reports"
      subtitle="All the files and reports sent by your users"
      leftbar={<SidebarLayout topMenu={TopMenuMokedData} bottomMenu={BottomMenuMokedData} />}
      rightbar={<SidebarLayout topMenu={TopMenuMokedData} bottomMenu={BottomMenuMokedData} />}
    />
  )
})
