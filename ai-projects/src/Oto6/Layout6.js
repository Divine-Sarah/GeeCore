import React from 'react'
import { Outlet } from 'react-router-dom'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import './Assets/css/style.css'


const Layout2 = () => {
  return (
    <>
      <div
        className='banner'
        style={{
          backgroundColor: "black",
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
}


export default Layout2