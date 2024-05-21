import React from 'react';
import style from './ProductDetails.module.css';
import Title from '@/components/modules/Title/Title';
import Card from '@/components/modules/Card/Card';

function ProductDetails() {
  return (
    <section className={style.productDetails}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Title title='جزئیات'/>
                </div>
            </div>
            <div className="row mt-5">
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
            </div>
        </div>
    </section>
  )
}

export default ProductDetails