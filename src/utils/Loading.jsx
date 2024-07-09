import React from 'react'
import loadingImage from '../assets/wojack-loader-a996330d.gif'

const Loading = () => {
  return (
    <div className='w-full h-screen bg-[#080808] flex items-center justify-center'>
      <img className='h-[20vh]' src={loadingImage} alt="" />
    </div>
  )
}

export default Loading
