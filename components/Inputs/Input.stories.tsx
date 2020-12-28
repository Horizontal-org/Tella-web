/* eslint-disable no-alert */
import { CSSProperties, useRef } from 'react'
import { storiesOf } from '@storybook/react'
import { SearchInput } from './SearchInput/SearchInput'

const titleStyle: CSSProperties = {
  fontSize: '27px',
  fontWeight: 500,
  color: '#666',
}

storiesOf('Inputs', module).add('Seatch input', () => {
  const searchRef = useRef<HTMLInputElement>()
  return (
    <div className="max-w-xs">
      <h3 style={titleStyle} className="text-xl py-4">
        Search input
      </h3>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          alert(`Search: ${searchRef.current.value}`)
        }}
      >
        <SearchInput name="search" placeholder="Search" ref={searchRef} />
      </form>
    </div>
  )
})
