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
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={custometheme}>
      <div>
        <Navbar />
        {/* <Home /> */}
        {/* <Product /> */}
        {/* <ProductDetail /> */}
        {/* <Review /> */}
        {/* <Cart /> */}
        {/* <Checkout /> */}
        {/* <Account /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:category" element={<Product />} />
          <Route path="/productdetail/:categoryId/:name/:productId" element={<ProductDetail />} />
          <Route path="/review/:productId" element={<Review />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account/*" element={<Account />} />

        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
