import React from 'react'
import AdminHomeCategoryTable from './AdminHomeCategoryTable'
import { useAppSelector } from '../../../state/Store'

const AdminGridTable = () => {
  const {customer} = useAppSelector(store => store)
  return (
    <div>
      <AdminHomeCategoryTable data={customer.homePageData?.grid || []} />
    </div>
  )
}

export default AdminGridTable
