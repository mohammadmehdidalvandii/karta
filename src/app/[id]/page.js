import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb';
import Footer from '@/components/modules/Footer/Footer';
import Navbar from '@/components/modules/Navbar/Navbar';
import ProductDetails from '@/components/template/ProductDetails/ProductDetails';
import React from 'react';

function page() {
  return (
    <>
    <Navbar/>
    <Breadcrumb title='جزِئیات گیفت کارت'/>
    <ProductDetails/>
    <Footer/>
    </>
  )
}

export default page