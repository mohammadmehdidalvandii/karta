import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb';
import Footer from '@/components/modules/Footer/Footer';
import Navbar from '@/components/modules/Navbar/Navbar';
import Basket from '@/components/template/shopping/Basket';
import React from 'react';

function page() {
  return (
      <>
    <Navbar/>
    <Breadcrumb title='سبد خرید'/>
    <Basket/>
    <Footer/>
      </>
)
}

export default page