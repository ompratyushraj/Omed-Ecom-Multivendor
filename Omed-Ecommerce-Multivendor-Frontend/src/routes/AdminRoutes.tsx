import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminSellerTable from '../pages/admin/AdminSellerTable'
import AdminCoupon from '../pages/admin/AdminCoupon'
import AdminAddNewCoupon from '../pages/admin/AdminAddNewCoupon'
import AdminGridTable from '../pages/admin/AdminGridTable'
import AdminElectronicTable from '../pages/admin/AdminElectronicTable'
import AdminShopByCategoryTable from '../pages/admin/AdminShopByCategoryTable'
import AdminDeal from '../pages/admin/AdminDeal'

const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminSellerTable />} />
        <Route path="/admincoupon" element={<AdminCoupon />} />
        <Route path="/adminaddnewcoupon" element={<AdminAddNewCoupon />} />
        <Route path="/admingridtable" element={<AdminGridTable />} />
        <Route path="/adminelectronictable" element={<AdminElectronicTable />} />
        <Route path="/adminshopbycategory" element={<AdminShopByCategoryTable />} />
        <Route path="/admindeal" element={<AdminDeal />} />
      </Routes>
    </div>
  )
}

export default AdminRoutes
