import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

export default function TopSection() {
  return (
    <div className='w-full bg-red-500 md:h-[50%] flex flex-wrap flex-row justify-center lg:justify-between items-center'>
        <LeftSection/>
        <RightSection/>
      
    </div>
  )
}
