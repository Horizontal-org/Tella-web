import { FunctionComponent, CSSProperties } from 'react'

const imageStyle: CSSProperties = {
  marginTop: '13px',
  marginBottom: '30px',
}

export const AppLockComponent: FunctionComponent = () => {
  return (
    <div className="w-48 h-60 bg-gray-25 font-sans rounded-lg text-centear hover:bg-gray-100">
      <p className="block font-bold font-medium items-center justify-center text-center mt-6 ">
        {' '}
        Password{' '}
      </p>
      {/* <img className="block ml-auto mr-auto w-6/12" src={icon} /> */}
      <div className="block ml-auto mr-auto w-6/12">
        <img src="/icon.png" style={imageStyle} alt="icon" />
      </div>
      <p className="block font-light text-base text-center mt-15">
        {' '}
        The user enters 6 or more letters or numbers{' '}
      </p>
    </div>
  )
}
