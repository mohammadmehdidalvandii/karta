import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb'
import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import Question from '@/components/template/Questions/Question'
import React from 'react'

function page() {
  return (
    <>
        <Navbar/>
        <Breadcrumb title='سوالات متداول'/>
        <Question/>
        <Footer/>
    </>
  )
}

export default page