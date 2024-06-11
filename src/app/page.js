import React from 'react'
import Navbar from '@/components/modules/Navbar/Navbar'
import Banner from '@/components/template/home/banner/Banner'
import Product from '@/components/template/home/Product/Product'
import Footer from '@/components/modules/Footer/Footer'
import { authUser } from '@/utils/serverHeplers'
import CategoriesModel from '@/models/Categories';

async function page() {
  const user = await authUser(); 
  const categories = await CategoriesModel.find({});
  return (
    <>
      <Navbar isLogin={user ? true :false} userRole={user?.role}/>
      <Banner/>
      <Product categories={JSON.parse(JSON.stringify(categories))} />
      <Footer/>
    </>
  )
}

export default page