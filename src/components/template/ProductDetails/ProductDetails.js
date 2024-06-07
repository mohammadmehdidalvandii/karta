"use client"
import React from 'react';
import style from './ProductDetails.module.css';
import Title from '@/components/modules/Title/Title';
import ProductCard from '@/components/modules/ProductCard/ProductCard';
import { showSwal } from '@/utils/helpers';

function ProductDetails({products}) {
        const handlerAddToBasket = (product)=>{
            const cart = JSON.parse(localStorage.getItem("cart")) || [];
            console.log("cart =>" ,cart);

            const isInCart = cart.some((item)=> item.id === product._id && item.name === product.name)
            console.log("isInCart" , isInCart)
             
            if(isInCart){
                showSwal("محصول در سبدخرید وجود دارد","error" , "فهمیدم")
            } else{
                const cartItem = {
                   id: product._id,
                   name:product.name,
                   price: product.price,
                };
                cart.push(cartItem);
                localStorage.setItem("cart", JSON.stringify(cart));
                showSwal("محصول اضافه شد به سبد خرید","success","فهمیدم")
            }
        }
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
                    <ProductCard name={product.name} price={product.price}
                    key={product._id}
                    addToBasket={()=> handlerAddToBasket(product)}
                    />
                </div>
            ))}
            </div>
        </div>
    </section>
  )
}

export default ProductDetails