import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb';
import Footer from '@/components/modules/Footer/Footer';
import Navbar from '@/components/modules/Navbar/Navbar';
import ProductDetails from '@/components/template/ProductDetails/ProductDetails';
import { authUser } from '@/utils/serverHeplers';
import React from 'react';

async function page() {
  const user = await authUser();
  return (
    <>
    <Navbar isLogin={user ? true :false}/>
    <Breadcrumb title='جزِئیات گیفت کارت'/>
    <ProductDetails/>
    <Footer/>
    </>
  )
}

export default page