import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb'
import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import Rule from '@/components/template/Rules/Rule'
import React from 'react'

function page() {
  return (
    <>
    <Navbar/>
    <Breadcrumb title="قوانین"/>
    <Rule/>
    <Footer/>
    </>
  )
}

export default page