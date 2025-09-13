import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/static/Navbar";
import { ThemeProvider } from "styled-components";
import custometheme from "./components/theme/CustomeTheme";

function App() {
  return (
    <>
      <ThemeProvider theme={custometheme}>
        <div>
          <Navbar />
        </div>
      </ThemeProvider>
      
    </>
  );
}

export default App;
