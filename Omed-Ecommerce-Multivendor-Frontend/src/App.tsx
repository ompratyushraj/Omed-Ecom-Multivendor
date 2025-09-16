import "./App.css";
import Navbar from "./components/static/navbar/Navbar.tsx";
import { ThemeProvider } from "styled-components";
import custometheme from "./components/theme/custometheme.ts";
import Home from "./customer/pages/home/Home.tsx";
import Product from "./customer/pages/product/Product.tsx";
import ProductDetail from "./customer/pages/productdetail/ProductDetail.tsx";
import Review from "./customer/pages/review/Review.tsx";
import Cart from "./customer/pages/cart/cart.tsx";

function App() {
  return (
    <ThemeProvider theme={custometheme}>
      <div>
        <Navbar />
        {/* <Home /> */}
        {/* <Product /> */}
        {/* <ProductDetail /> */}
        {/* <Review /> */}
        <Cart />
      </div>
    </ThemeProvider>
  );
}

export default App;
