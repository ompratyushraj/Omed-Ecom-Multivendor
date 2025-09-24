import "./App.css";
import Navbar from "./components/static/navbar/Navbar.tsx";
import { ThemeProvider } from "styled-components";
import custometheme from "./components/theme/custometheme.ts";
import Home from "./customer/pages/home/Home.tsx";
import Product from "./customer/pages/product/Product.tsx";
import ProductDetail from "./customer/pages/productdetail/ProductDetail.tsx";
import Review from "./customer/pages/review/Review.tsx";
import Checkout from "./customer/pages/checkout/Checkout.tsx";
import Cart from "./customer/pages/cart/Cart.tsx";
import Account from "./customer/pages/account/Account.tsx";
import { Route, Routes, useNavigate } from "react-router-dom";
import BecomeSeller from "./seller/sellerauthentication/BecomeSeller.tsx";
import SellerDashboard from "./seller/sellerpages/sellerdashboard/MainDashboard.tsx";
import AdminDashboard from "./admin/adminpages/admindashboard/AdminDashboard.tsx";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./state/Store.ts";
import { fetchSellerProfile } from "./state/seller/sellerSlice.ts";
import CustomerAuth from "./customer/pages/Auth/CustomerAuth.tsx";
import { fetchUserProfile } from "./state/AuthSlice.ts";
import PaymentSuccess from "./customer/pages/payment/PaymentSuccess.tsx";
import Wishlist from "./customer/pages/wishlist/Wishlist.tsx";
import { createHomeCategories } from "./state/customer/customerSlice.ts";
import { homeCategories } from "./data/HomeCategores.ts";

function App() {
  const dispatch = useAppDispatch();
  const { seller, auth } = useAppSelector((store) => store);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchSellerProfile(localStorage.getItem("jwt") || ""));
    dispatch(createHomeCategories(homeCategories));
  }, []);

  // useEffect(() => {
  //   if (seller.profile) {
  //     navigate("/");
  //   }
  // }, [seller.profile]);

  useEffect(() => {
    dispatch(fetchUserProfile({jwt: auth.jwt || localStorage.getItem("jwt")}))
  }, [auth.jwt])

  // useEffect(() => {
  //   const jwt = auth.jwt || localStorage.getItem("jwt");
  //   console.log("JWT being used: ", jwt); // Check what's actually being sent
  //   dispatch(fetchUserProfile({ jwt }));
  // }, [auth.jwt]);
  
  return (
    <ThemeProvider theme={custometheme}>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<CustomerAuth />} />
          <Route path="/product/:category" element={<Product />} />
          <Route
            path="/productdetail/:categoryId/:name/:productId"
            element={<ProductDetail />}
          />
          <Route path="/review/:productId" element={<Review />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment-success/:orderId" element={<PaymentSuccess />} />
          <Route path="becomeseller" element={<BecomeSeller />} />
          <Route path="/account/*" element={<Account />} />
          <Route path="/seller/*" element={<SellerDashboard />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
