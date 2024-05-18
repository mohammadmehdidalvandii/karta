import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb'
import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import ContactUs from '@/components/template/ContactUs/ContactUs'
import React from 'react'

function page() {
  return (
    <>
        <Navbar/>
        <Breadcrumb title='تماس با ما'/>
        <ContactUs/>
        <Footer/>
    </>
  )
}

export default page