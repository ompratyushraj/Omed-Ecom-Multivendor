import React from 'react'
import AdminHomeCategoryTable from './AdminHomeCategoryTable'
import { useAppSelector } from '../../../state/Store'

const AdminShopByCategoryTable = () => {
  const {customer} = useAppSelector(store => store)
  return (
    <div>
      <AdminHomeCategoryTable data={customer.homePageData?.shopByCategories || []}/>
    </div>
  )
}

export default AdminShopByCategoryTable
