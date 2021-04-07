import { FunctionComponent, CSSProperties } from 'react'

const imageStyle: CSSProperties = {
  height: '20px',
}

export const ConfigSelectComponent: FunctionComponent = () => {
  return (
    <div className="fixed inset-y-1/3 inset-x-1/3">
      <p className="font-sans  font-bold text-xxxl"> Configuration </p>
      <div className="w-96 h-20 rounded-xl bg-gray-200  hover:bg-gray-100">
        {/* <img src="./pencil.png" style={imageStyle} alt="icon" /> */}
        <p className="m-7 pt-2.5 font-bold text-gray-700"> App Lock</p>
        <p className="m-7 pb-10 -mt-3 text-sm text-gray-500"> Pattern and PIN available</p>
      </div>

      <div className="w-96 h-20 rounded-xl bg-gray-200  hover:bg-gray-100">
        <p className="m-7 pt-2 font-bold text-gray-700 "> Camouflage </p>
        <p className="m-7 pb-2 -mt-3 text-sm text-gray-500">
          {' '}
          Change name + icon and Calculator available
        </p>
      </div>
    </div>
  )
}
