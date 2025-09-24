import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../state/Store'
import { fetchUserOrderHistory } from '../../state/user/orderSlice';
import OrderItemCard from './OrderItemCard';

const Order = () => {
  const dispatch = useAppDispatch();
  const {order} = useAppSelector(store => store);

  useEffect(() => {
    dispatch(fetchUserOrderHistory(localStorage.getItem("jwt") || ""))
  }, [])

  return (

    <div className='text-sm min-h-screen ps-10'>
      <div className='pb-5'>
        <h1 className='font-bold text-2xl'>All Orders</h1>
        <p className='font-semibold'>from anytime</p>
      </div>
      <div className='space-y-6'>
 
        {order.orders.map((order) => order.orderItems.map((item) => <OrderItemCard order={order} item={item}/> ) )}

      </div>

    </div>
  )
}

export default Order
