import React, { FunctionComponent } from 'react'
import { Button } from '../../components/Button/Button'
import { ButtonPopup } from '../../components/ButtonPopup/ButtonPopup'

type Props = {
  disabled?: boolean
  onCreate: () => void
}

export const CreateConfigPopup: FunctionComponent<Props> = ({ disabled, onCreate }) => (
  <>
    <ButtonPopup disabled={disabled}>
      <div className="flex-start items-center">
        <h4 className="font-sans mt-4 ml-4 text-xl font-bold">New configuration</h4>
      </div>
      <div className="mt-3 mx-4 text-sm justify-center">
        <p>
          Enter the name of the new configuration. This will only be visible internally, your users
          will never see it.
        </p>
      </div>
      <div className="mx-4 flex felx-col">
        <input className="shadow appearance-none border rounded w-full flex-1 py-1 px-1 text-gray-700 mb-3 mt-6 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mt-3 mb-5 flex justify-center space-x-6 px-4 flex-col">
        <Button onClick={onCreate} text="Create" full />
      </div>
    </ButtonPopup>
  </>
)
