import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminSellerTable from '../admin/adminpages/adminseller/AdminSellerTable'
import AdminCoupon from '../admin/adminpages/admincoupon/AdminCoupon'
import AdminAddNewCoupon from '../admin/adminpages/admincoupon/AdminAddNewCoupon'
import AdminGridTable from '../admin/adminpages/adminhomepage/AdminGridTable'
import AdminElectronicTable from '../admin/adminpages/adminhomepage/AdminElectronicTable'
import AdminShopByCategoryTable from '../admin/adminpages/adminhomepage/AdminShopByCategoryTable'
import AdminDeal from '../admin/adminpages/adminhomepage/AdminDeal'

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
