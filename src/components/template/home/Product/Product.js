import React from 'react';
import style from './Product.module.css';
import Title from '@/components/modules/Title/Title';
import Card from '@/components/modules/Card/Card';

function Product({categories}) {
  return (
    <section className={style.products}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Title title='گیفت کارت ها'/>
                </div>
            </div>
            <div className="row mt-5">
                    {categories.map(category=>(
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={category._id}>
                    <Card name={category.name} title={category.title}/>
                </div>
                    )) }
                {/* <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <Card/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <Card/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <Card/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <Card/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <Card/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <Card/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <Card/>
                </div> */}
            </div>
        </div>
    </section>
  )
}

export default Product