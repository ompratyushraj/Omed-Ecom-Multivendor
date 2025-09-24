import React from 'react'
import AdminHomeCategoryTable from '../../components/admin/AdminHomeCategoryTable'
import { useAppSelector } from '../../state/Store'

const AdminElectronicTable = () => {
  const {customer} = useAppSelector(store => store)
  return (
    <div>
      <AdminHomeCategoryTable data={customer.homePageData?.electricCategories || []}/>
    </div>
  )
}

export default AdminElectronicTable
