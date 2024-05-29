import React from 'react'
import Navbar from '@/components/modules/Navbar/Navbar'
import Banner from '@/components/template/home/banner/Banner'
import Product from '@/components/template/home/Product/Product'
import Footer from '@/components/modules/Footer/Footer'
import { authUser } from '@/utils/serverHeplers'

async function page() {
  const user = await authUser(); 
  return (
    <>
      <Navbar isLogin={user ? true :false}/>
      <Banner/>
      <Product/>
      <Footer/>
    </>
  )
}

export default page