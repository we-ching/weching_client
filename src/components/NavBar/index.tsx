import NavBottom from './NavBottom';

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';


const NavBar = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={Home} />
          <Route path="/page2" element={Page2} />
          <Route path="/page3" element={Page3} />
          <Route path="/page4" element={Page4} />
          <Route path="/page5" element={Page5} />
        </Routes>
        <NavBottom />
      </BrowserRouter>
    )
  }

export default NavBar;
