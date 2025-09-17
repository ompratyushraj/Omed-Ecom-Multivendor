import React from 'react'
import OrderItem from './OrderItem'

const Order = () => {
  return (

    <div className='text-sm min-h-screen ps-10'>
      <div className='pb-5'>
        <h1 className='font-bold text-2xl'>All Orders</h1>
        <p className='font-semibold'>from anytime</p>
      </div>
      <div className='space-y-6'>

        {[1, 1, 1, 1, 1, 1].map((item) => <OrderItem />)}

      </div>

    </div>
  )
}

export default Order
