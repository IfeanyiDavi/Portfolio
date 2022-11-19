import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home/home";

import"./index.css";
import Portfolio from "./pages/portfolio/portfolio";
import Contact from "./pages/contact/contact.";
import About from "./pages/about/about";
function App() {
  return (
    <BrowserRouter>
      <div className="main_container">
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
