import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb'
import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import Content from '@/components/template/Assist/Content'
import React from 'react'

function page() {
  return (
    <>
    <Navbar/>
    <Breadcrumb title='همکاری با ما'/>
    <Content/>
    <Footer/>
    </>
  )
}

export default page