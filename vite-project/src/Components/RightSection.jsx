import React from 'react'
import CommentCard from './CommentCard'

export default function RightSection() {
  return (
    <div className='w-[35rem] h-[20rem]  flex flex-col justify-center md:items-left items-center gap-5'>
      <div><CommentCard text="Reviews"/></div>
      <div className='lg:pl-24'><CommentCard text="Report Guru"/></div>
      <div className='lg:pl-44'><CommentCard text="BestTech"/></div>
    </div>
  )
}
