import { Route, Routes } from 'react-router-dom'
import SellerAddProduct from '../seller/sellerpages/sellerproducts/SellerAddProduct'
import SellerOrder from '../seller/sellerpages/sellerorders/SellerOrder'
import SellerProduct from '../seller/sellerpages/sellerproducts/SellerProduct'
import SellerProfile from '../seller/sellerpages/sellerAccount/SellerProfile'
import SellerPayment from '../seller/sellerpages/sellerpayment/SellerPayment'
import SellerTransaction from '../seller/sellerpages/sellerpayment/SellerTransaction'
import SellerDashboard from '../seller/sellerpages/sellerdashboard/SellerDashboard'

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
