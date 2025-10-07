import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

export default function TopSection() {
  return (
    <div className='w-full  md:h-[50%] flex flex-wrap flex-row justify-center gap-2 items-center'>
        <LeftSection/>
        <RightSection/>
      
    </div>
  )
}
