import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Container from "./Pages/Home4/Component/Container";
import Footer from "./Components/Footer"

import "./Assets/css/style.css";
const Layout4 = () => {
  return (
    <>
      <div className='banner_section'>
        <Header />
        <Container />
      </div>
      <Outlet>
        
      </Outlet>
      <Footer />
    </>
  );
};

export default Layout4;
