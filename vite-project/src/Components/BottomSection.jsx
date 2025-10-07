import React from 'react'
import img1 from '../../../images/image-anne.jpg';
import img2 from '../../../images/image-colton.jpg';
import img3 from '../../../images/image-irene.jpg';
import RatingCard from './RatingCard';

export default function BottomSection() {
  return (
    <div className='w-full  md:h-[50%] flex flex-row justify-center items-center flex-wrap gap-6 '>
      <div>
      <RatingCard image={img2} name="Colton Smith" verification="Verified Buyer" comment="We needed the same printed design as the one we had ordered a week prior.
    Not only did they find the original order, but we also received it in time.
    Excellent!"/>
    </div>
    <div className='md:mt-10'>
    <RatingCard image={img3} name="Irene Roberts" verification="Verified Buyer" comment="Customer service is always excellent and very quick turn around. Completely
    delighted with the simplicity of the purchase and the speed of delivery."/>
    </div>
    <div className='md:mt-20'>
    <RatingCard image={img1} name="Anne Wallace" verification="Verified Buyer" comment="Put an order with this company and can only praise them for the very high
    standard. Will definitely use them again and recommend them to everyone!"/>
    </div>
    </div>
  )
}
