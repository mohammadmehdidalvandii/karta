import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb';
import Footer from '@/components/modules/Footer/Footer';
import Navbar from '@/components/modules/Navbar/Navbar';
import ProductDetails from '@/components/template/ProductDetails/ProductDetails';
import connectToDB from '@/config/db';
import { authUser } from '@/utils/serverHeplers';
import React from 'react';
import ProductModel from '@/models/Products';

async function page({ params }) {
  const user = await authUser();
  const productID = params.id;
  const productType = productID.toLowerCase()
  connectToDB();
  const products = await ProductModel.find({ category: productType})
  return (
    <>
    <Navbar isLogin={user ? true :false}/>
    <Breadcrumb title='جزِئیات گیفت کارت'/>
    <ProductDetails products={products}/>
    <Footer/>
    </>
  )
}

export default page