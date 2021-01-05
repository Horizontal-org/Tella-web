/* eslint-disable react/jsx-props-no-spreading */
import { MdSearch } from '@react-icons/all-files/md/MdSearch'
import { ComponentPropsWithoutRef, forwardRef, useState } from 'react'
import cn from 'classnames'

export const SearchInput = forwardRef<HTMLInputElement, ComponentPropsWithoutRef<'input'>>(
  ({ ...props }, ref) => {
    const [inFocus, setFocus] = useState(false)
    return (
      <div className="relative">
        <div className="absolute flex border border-transparent left-0 top-0 h-full w-10 font-osans">
          <div
            className={cn(
              'flex items-center justify-center rounded-tl rounded-bl z-10 text-lg h-full w-full text-center',
              {
                'text-gray-400': !inFocus,
                'text-blue-300': inFocus,
              }
            )}
          >
            <MdSearch size={15} />
          </div>
        </div>
        <input
          type="text"
          ref={ref}
          className="
          text-sm
          sm:text-base
          relative
          w-full
          border
          rounded
          border-gray-300
          placeholder-gray-600
          text-gray-500
          hover:border-gray-400
          focus:border-blue-300
          focus:outline-none
          py-1
          pr-2
          pl-9"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          {...props}
        />
      </div>
    )
  }
)

SearchInput.displayName = 'SearchInput'