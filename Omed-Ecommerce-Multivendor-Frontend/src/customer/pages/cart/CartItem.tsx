import { Add, Close, Remove } from '@mui/icons-material'
import { Button, Divider, IconButton } from '@mui/material'
import React from 'react'

const CartItem = () => {
  const handleUpdateQuantity = () => {

  }
  return (
    <>
      <div className='border rounded-md relative'>

        <div className='p-5 flex gap-3'>

          <div>
            <img className='w-[90px] rounded-md' src="https://images.unsplash.com/vector-1754146328245-2c3f62920f1b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
          <div className='space-y-2'>

            <h1 className="font-semibold text-lg">Land Rover Vellar</h1>
            <p className='text-gray-600 font-medium text-sm'>Turquoise Blue
              Super Charge V12 Engine
            </p>

            <p className='text-gray-400 text-xs'><strong>Sold by:</strong>
              Tata Motors </p>
            <p className='text-sm'> All time service available</p>
            <p className='text-sm text-gray-500'><strong>Quantity in showroom:</strong>
              10</p>

          </div>
        </div>
        <Divider />
        <div className='flex justify-between items-center'>
          <div className='px-5 py-2 flex justify-between items-center'>

            <div className="flex items-center gap-2 w-[140px]
justify-between">
              <Button disabled={true}>
                <Remove />
              </Button>
              <span>
                {5}
              </span>
              <Button onClick={handleUpdateQuantity}>
                <Add />
              </Button>
            </div>
          </div>

          <div className='pr-5'>

            <p className='text-gray-700 font-medium'>₹799</p>
          </div>
        </div>
        <div className='absolute top-1 right-1'>
          <IconButton color="primary">
            <Close />
          </IconButton>
        </div>
      </div >

    </>
  )
}

export default CartItem
