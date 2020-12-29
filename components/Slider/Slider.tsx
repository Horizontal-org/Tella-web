/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable global-require */

import { FunctionComponent, useState } from 'react'

type Props = {
  items: React.ReactNode[]
}

export const Slider: FunctionComponent<Props> = ({ items }) => {
  const [current, setCurrent] = useState(1)

  const goNext = () => {
    if (current === items.length) {
      setCurrent(1)
      return
    }
    setCurrent(current + 1)
  }

  const goPrev = () => {
    if (current === 1) {
      setCurrent(items.length)
      return
    }
    setCurrent(current - 1)
  }

  return (
    <div className="flex-row">
      <div className="rounded-sm">{items[current - 1]}</div>
      <div className="flex justify-center my-5">
        <img
          className="opacity-70"
          alt="Previous item"
          src={require('./assets/arrow-left.svg')}
          onClick={goPrev}
        />
        <p className="px-9 text-sm font-osans font-light text-gray-400">
          {current} / {items.length}
        </p>
        <img
          className="opacity-70"
          alt="Next item"
          src={require('./assets/arrow-right.svg')}
          onClick={goNext}
        />
      </div>
    </div>
  )
}
