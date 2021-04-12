import React, { FunctionComponent } from 'react'
import { NewButtonPopup } from '../../components/NewButtonPopup/NewButtonPopup'

type Props = {
  disabled?: boolean
  createCB: () => void
}

export const CreateConfigPopup: FunctionComponent<Props> = ({ disabled, createCB }) => (
  <>
    <NewButtonPopup disabled={disabled}>
      <div className="flex-start items-center">
        <h4 className="font-sans mt-4 ml-4 text-xl font-bold">New configuration</h4>
      </div>
      <div className="mt-3 mx-4 text-sm justify-center">
        <p>
          Enter the name of the new configuration. This will only be visible internally, your users
          will never see it.
        </p>
      </div>
      <div>
        <input className="shadow appearance-none border rounded py-1 px-1 text-gray-700 w-5/6 mb-3 mt-6 ml-6 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mt-3 mb-5 flex justify-center space-x-6 px-4">
        <button
          type="button"
          className="inline-block flex-none w-full py-1 px-2 space-x-2 rounded items-center text-sm font-bold font-sans uppercase border border-gray-100 active:shadow-inbox disabled:opacity-50 focus:outline-none text-white bg-blue-300 hover:bg-blue-400"
          onClick={createCB}
        >
          <span>Create</span>
        </button>
      </div>
    </NewButtonPopup>
  </>
)
