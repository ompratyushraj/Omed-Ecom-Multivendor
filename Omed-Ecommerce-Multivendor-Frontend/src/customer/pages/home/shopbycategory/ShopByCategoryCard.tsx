import React from 'react'

const ShopByCategoryCard = () => {
  return (
    <div className='flex gap-5 mb-5 flex-col justify-center items-center group cursor-pointer'>
      <div className='custome-border w-[150px] h-[150px] lg:w-[249px] lg:h-[249px] rounded-full bg-primary-color'>
        <img className='rounded-full group-hover:scale-95 transition-transform transform-duration-700 object-cover object-top h-full w-full'
          src="https://plus.unsplash.com/premium_vector-1725507312354-ccae7a5dd31d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='' />
      </div>
      <h1 className='font-semibold'>General Medicines</h1>
    </div>
  )
}

export default ShopByCategoryCard
