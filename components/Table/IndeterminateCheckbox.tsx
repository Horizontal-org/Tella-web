/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unsafe-call */

// TODO: Fix the types in this react-table hack

import { useEffect, forwardRef, useRef, Ref } from 'react'
import { useCombinedRefs } from '../../utilities/useCombinedRefs'

interface Props {
  indeterminate?: boolean
  name?: string
}

export const IndeterminateCheckbox = forwardRef<HTMLInputElement, Props>(
  ({ indeterminate, ...rest }, ref: Ref<HTMLInputElement>) => {
    const defaultRef = useRef(null)
    const combinedRef = useCombinedRefs(ref, defaultRef)

    useEffect(() => {
      if (combinedRef?.current) {
        combinedRef.current.indeterminate = indeterminate ?? false
      }
    }, [combinedRef, indeterminate])

    return (
      <>
        <input type="checkbox" ref={combinedRef} {...rest} />
      </>
    )
  }
)
