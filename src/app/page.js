import React from 'react'
import Navbar from '@/components/modules/Navbar/Navbar'
import Banner from '@/components/template/home/banner/Banner'
import Product from '@/components/template/home/Product/Product'
import Footer from '@/components/modules/Footer/Footer'

function page() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Product/>
      <Footer/>
    </>
  )
}

export default page