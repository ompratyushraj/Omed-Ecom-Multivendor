import "./App.css";
import Navbar from "./components/static/navbar/Navbar.tsx";
import { ThemeProvider } from "styled-components";
import custometheme from "./components/theme/custometheme.ts";
import Home from "./customer/pages/home/Home.tsx";
import Product from "./customer/pages/product/Product.tsx";

function App() {
  return (
    <ThemeProvider theme={custometheme}>
      <div>
        <Navbar />
        {/* <Home /> */}
        <Product />
      </div>
    </ThemeProvider>
  );
}

export default App;
