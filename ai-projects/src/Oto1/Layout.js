import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'
import Container from '../Oto1/Pages/Home/components/Container'
import Footer from './Components/Footer'

import './Assets/css/style.css'
const Layout = () => {
  return (
      <>
          <div className='banner_section'>
               <Header/>
      <Container />
      </div>
         <Outlet>
              
          </Outlet>
        <Footer/>
      </>
  )
}

export default Layout