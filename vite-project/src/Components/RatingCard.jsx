import React from 'react'

export default function RatingCard(props) {
  return (
    <div className='flex flex-col justify-center items-center p-6 md:w-[22rem] md:h-[15rem] bg-[#511f50] rounded-[0.35rem]'>
        <div className='flex flex-col justify-start items-center gap-3 '>
            <div className='flex flex-row justify-start items-center gap-6  w-full'>
                <img src={props.image} alt="img" className='rounded-full w-[2.5rem] h-[2.5rem] text-center'/>
                <div className='flex flex-col justify-start items-center'>
                    <p className='text-white font-semibold'>{props.name}</p>
                    <p className='text-[#b04d88] font-semibold'>{props.verification}</p>
                </div>
            </div>
            <div className='text-center text-white font-semibold'>"{props.comment}"</div>
        </div>
      
    </div>
  )
}
