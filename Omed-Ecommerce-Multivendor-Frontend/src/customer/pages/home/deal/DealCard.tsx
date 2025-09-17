
import React from 'react'

const DealCard = () => {
  return (
    <div className='w-[13rem] cursor-pointer'>
      <img className='border-x-[7px] rounded-t-2xl border-t-[7px] border-gray-300 w-full h-[13rem] object-cover object-top' src="https://plus.unsplash.com/premium_vector-1741162005201-bfd2205ade97?q=80&w=742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <div className='border-4 rounded-b-2xl border-black bg-black text-white p-2 text-center'>
        <p className='text-1g font-semibold'>Smart Watch</p>
        <p className='text-2xl font-bold'>20% OFF</p>
        <p className='text-balance text-1g'>shop now</p>
      </div>
    </div>
  )
}

export default DealCard