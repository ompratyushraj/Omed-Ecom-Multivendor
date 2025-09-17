import { Divider } from '@mui/material'
import React from 'react'

const PricingCard = () => {
  return (
    <div>

      <div className='space-y-3 p-5'>
        <div className='flex justify-between items-center'>
          <span>Subtotal</span>
          <span>₹899</span>

        </div>
        <div className='flex justify-between items-center'>
          <span>Shipping</span>
          <span>₹699</span>

        </div>

        <div className='flex justify-between items-center'>
          <span>Platform</span>
          <span>₹699</span>
        </div>

        <Divider />
        <div className='flex justify-between items-center text-primary-color'>
          <span ><strong>Total</strong></span>
          <span ><strong>₹699</strong></span>
        </div>
        

      </div>

    </div>
  )
}

export default PricingCard
