import { FunctionComponent, useState } from 'react'
import { MdNavigateBefore } from '@react-icons/all-files/md/MdNavigateBefore'
import { MdNavigateNext } from '@react-icons/all-files/md/MdNavigateNext'

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
        <MdNavigateBefore className="cursor-pointer opacity-70 text-gray-400" onClick={goPrev} />
        <p className="px-9 text-sm font-osans font-light text-gray-400">
          {current} / {items.length}
        </p>
        <MdNavigateNext className="cursor-pointer opacity-70 text-gray-400" onClick={goNext} />
      </div>
    </div>
  )
}
