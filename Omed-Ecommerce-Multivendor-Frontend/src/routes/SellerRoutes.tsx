import { Route, Routes } from 'react-router-dom'
import SellerAddProduct from '../pages/seller/SellerAddProduct'
import SellerOrder from '../pages/seller/SellerOrder'
import SellerProduct from '../pages/seller/SellerProduct'
import SellerProfile from '../pages/seller/SellerProfile'
import SellerPayment from '../pages/seller/SellerPayment'
import SellerTransaction from '../pages/seller/SellerTransaction'
import SellerDashboard from '../pages/seller/SellerDashboard'

const SellerRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<SellerDashboard />} />
            <Route path="/sellerproduct" element={<SellerProduct />} />
            <Route path="/selleraddproduct" element={<SellerAddProduct />} />
            <Route path="/sellerorder" element={<SellerOrder />} />
            <Route path="/sellerprofile" element={<SellerProfile />} />
            <Route path="/sellerpayment" element={<SellerPayment />} />
            <Route path="/sellertransaction" element={<SellerTransaction />} />
        </Routes>
    </div>
  )
}

export default SellerRoutes
