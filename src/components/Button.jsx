import React from 'react'
import { IoCheckmark } from "react-icons/io5";


const Button = () => {
  return (
    <div className='w-full'>
      <div className='w-6 h-6 bg-zinc-800 rounded-full flex items-center justify-center border-[1px] border-zinc-600'>
      <IoCheckmark className='text-sm text-zinc-600 font-semibold' />

      </div>
    </div>
  )
}

export default Button
