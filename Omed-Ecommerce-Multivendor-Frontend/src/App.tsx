import "./App.css";
import Navbar from "./components/static/Navbar";
import { ThemeProvider } from "styled-components";
import custometheme from "./components/theme/custometheme.ts";
import Home from "./customer/pages/home/Home.tsx";

function App() {
  return (
    <ThemeProvider theme={custometheme}>
      <div>
        <Navbar />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
