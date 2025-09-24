
import React from 'react'
import type { Deal } from '../../type/DealType'

const DealCard = ({item}:{item:Deal}) => {
  return (
    <div className='w-[13rem] cursor-pointer'>
      <img className='border-x-[7px] rounded-t-2xl border-t-[7px] border-gray-300 w-full h-[13rem] object-cover object-top bg-slate-400' src={item.category.image} alt="" />
      <div className='border-4 rounded-b-2xl border-black bg-black text-white p-2 text-center'>
        <p className='text-1g font-semibold'>{item.category.name}</p>
        <p className='text-2xl font-bold'>{item.discount}% OFF</p>
        <p className='text-balance text-1g'>shop now</p>
      </div>
    </div>
  )
}

export default DealCard