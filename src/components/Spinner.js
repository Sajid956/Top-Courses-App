import React from 'react'
import './Spinner.css'

export const Spinner = () => {
  return (
    <div className=' mx-auto my-20'>
        <div className='spinner'></div>
        <p className='text-white text-[1.8rem] my-5 -mx-3'>Loading...</p>
    </div>
  )
}
