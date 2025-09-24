import React from 'react'
import OrderTable from '../../components/seller/orders/OrderTable'

const SellerOrder = () => {
  return (
    <div>
      <h1 className='font-bold mb-5 text-xl'>All Orders</h1>
      <OrderTable />
    </div>
  )
}

export default SellerOrder
