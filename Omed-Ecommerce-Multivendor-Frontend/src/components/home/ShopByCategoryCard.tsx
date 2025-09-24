import React from 'react'
import type { HomeCategory } from '../../type/HomeCategoryType'

const ShopByCategoryCard = ({item}: {item:HomeCategory}) => {
  return (
    <div className='flex gap-5 mb-5 flex-col justify-center items-center group cursor-pointer'>
      <div className='custome-border w-[150px] h-[150px] lg:w-[249px] lg:h-[249px] rounded-full bg-primary-color'>
        <img className='rounded-full group-hover:scale-95 transition-transform transform-duration-700 object-cover object-top h-full w-full'
          src={item.image} alt='' />
      </div>
      <h1 className='font-semibold'>{item.name}</h1>
    </div>
  )
}

export default ShopByCategoryCard
