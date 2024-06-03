import React from 'react';
import style from './ProductDetails.module.css';
import Title from '@/components/modules/Title/Title';
import ProductCard from '@/components/modules/ProductCard/ProductCard';

function ProductDetails({products}) {
    
  return (
    <section className={style.productDetails}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Title title='جزئیات'/>
                </div>
            </div>
            <div className="row mt-5">
                {products.length === 0 &&(
                    <h2 className={style.productDetails_empty}>محصول در حال حاضر موجود نیست</h2>
                )}
            {products.map(product =>(
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <ProductCard name={product.name} price={product.price}/>
                </div>
            ))}
            </div>
        </div>
    </section>
  )
}

export default ProductDetails