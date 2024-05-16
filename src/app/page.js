import React from 'react'
import Navbar from '@/components/modules/Navbar/Navbar'
import Banner from '@/components/template/home/banner/Banner'
import Product from '@/components/template/home/Product/Product'

function page() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Product/>
    </>
  )
}

export default page