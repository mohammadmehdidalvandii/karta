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
                        {/* {cart.length == [] && (
                                <div className={style.basket_empty}>
                                    <h5 className={style.basket_empty_text}>سبد خرید خالی است </h5>
                                    <Link href='/' className={style.basket_empty_link}>محصولات</Link>
                                </div>
                        )} */}
                        <ul className={style.basket_items}>
                            <li className={style.basket_item}>
                                <img src="/images/itunes.jpg" alt="product img" className={style.basket_item_img} />
                            </li>
                            <li className={style.basket_item}>
                                <span className={style.basket_item_title}>گیفت کارت itunes</span>
                            </li>
                            <li className={style.basket_item}>
                                <button className={style.basket_item_btn}>حذف</button>
                            </li>
                        </ul>
                        <ul className={style.basket_items}>
                            <li className={style.basket_item}>
                                <span className={style.basket_item_txt}>جمع کل</span>
                            </li>
                            <li className={style.basket_item}>
                                <span className={style.basket_item_text}>دلار - 100</span>
                            </li>
                        </ul>
                        <ul className={style.basket_items}>
                            <li className={style.basket_item}>
                                <span className={style.basket_item_txt}>قابل پرداخت</span>
                            </li>
                            <li className={style.basket_item}>
                                <span className={style.basket_item_text}>5,900,000 - تومان</span>
                            </li>
                        </ul>
                            <button className={style.basket_pay}>پرداخت</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Basket