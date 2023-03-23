import React from "react";

import { Outlet } from "react-router-dom";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import "./Assets/css/style.css";
// import Image from "../Oto3/Assets/images/Ai-11.png";

const Layout3 = () => {
  return (
    <>
      <div
        className="banner"
        style={{
          background:
            "linear-gradient(0deg, rgba(110, 120, 180, 0.200), rgb(185, 143, 195))",
          backgroundSize: "cover",
          padding: "2.5% 0 10% 0",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Banner />
      </div>

      <Outlet></Outlet>
      <Footer />
    </>
  );
};

export default Layout3;
