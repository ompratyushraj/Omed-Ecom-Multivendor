import React from 'react'

const ShopByCategoryCard = () => {
  return (
    <div className='flex gap-5 mb-5 flex-col justify-center items-center group cursor-pointer'>
      <div className='custome-border w-[150px] h-[150px] lg:w-[249px] lg:h-[249px] rounded-full bg-primary-color'>
        <img className='rounded-full group-hover:scale-95 transition-transform transform-duration-700 object-cover object-top h-full w-full'
          src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19873492/2022/9/10/" alt='' />
      </div>
      <h1>General Medicines</h1>
    </div>
  )
}

export default ShopByCategoryCard
