import React from 'react'
import star from '../../../images/icon-star.svg';

export default function CommentCard(props) {
  return (
    <div className='bg-[#f7f2f8] flex md:flex-row flex-col justify-center md:justify-left items-center gap-2 md:gap-6 w-[19rem] md:w-[25rem] md:h-[3rem] h-[5rem] rounded-[0.35rem] md:pl-6'>
      <div className='flex flex-row justify-center items-center gap-1'>
      <img src={star} alt="star" />
      <img src={star} alt="star" />
      <img src={star} alt="star" />
      <img src={star} alt="star" />
      <img src={star} alt="star" />
      </div> 
      <p className='text-[#511f50] font-bold text-center'>Rated 5 Stars in {props.text}</p>
      
    </div>
  )
}
