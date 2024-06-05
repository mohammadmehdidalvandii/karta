"use client"
import React, { useEffect, useState } from 'react';
import style from './Basket.module.css';
import Link from 'next/link';

function Basket() {
    const [cart ,setCart] = useState([]);

    // useEffect(()=>{
    //     const localCart = JSON.parse(localStorage.getItem("cart")|| []);
    //     setCart(localCart)
    // },[])
  return (
    <section className={style.basket}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className={style.basket_wrapper}>
                        <form action="#" className={style.basket_form}>
                            <div className={style.basket_formBox}>
                                <span className={style.basket_formBox_text}>نام و نام خانوادگی</span>
                                <input type="text" className={style.basket_formBox_input} placeholder='مثلا محمد کریمی' />
                            </div>
                            <div className={style.basket_formBox}>
                                <span className={style.basket_formBox_text}>ایمیل</span>
                                <input type="text" className={style.basket_formBox_input} placeholder='مثلا karta@gmail.com' />
                            </div>
                            <div className={style.basket_formBox}>
                                <span className={style.basket_formBox_text}>شماره تماس</span>
                                <input type="text" className={style.basket_formBox_input} placeholder='مثلا 09129999999' />
                            </div>
                        </form>

                        <p className={style.basket_text_alert}>تمامی فیلد های بالا اجباری هست </p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className={style.basket_wrapper}>
                        {cart.length >= 0 && (
                                <div className={style.basket_empty}>
                                    <h5 className={style.basket_empty_text}>سبد خرید خالی است </h5>
                                    <Link href='/' className={style.basket_empty_link}>محصولات</Link>
                                </div>
)}
                        {/* {cart.map((item)=>(
                        <ul className={style.basket_items}>
                            <ul className={style.basket_item}>
                                <span className={style.basket_item_title}>
                                <img src="/images/itunes.jpg" alt="product img" className={style.basket_item_img} />
                                </span>
                                <span className={style.basket_item_text}>{item.name} - {item.price} دلاری</span>
                            </ul>
                            <ul className={style.basket_item}>
                                <span className={style.basket_item_title}>جمع کل:</span>
                                <span className={style.basket_item_text}>{item.price} دلار</span>
                            </ul>
                            <ul className={style.basket_item}>
                                <span className={style.basket_item_title}>تخفیف:</span>
                                <span className={style.basket_item_text}></span>
                            </ul>
                            <ul className={style.basket_item}>
                                <span className={style.basket_item_title}>قابل پرداخت:</span>
                                <span className={style.basket_item_text}>{(item.price*59000).toLocaleString()} تومان</span>
                            </ul>
                        </ul>
                        <button className={style.basket_pay}>پرداخت</button>
                        ))} */}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Basket