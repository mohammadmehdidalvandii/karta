import React from 'react';
import style from './Basket.module.css';

function Basket() {
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
                        <ul className={style.basket_items}>
                            <ul className={style.basket_item}>
                                <span className={style.basket_item_title}>
                                <img src="/images/itunes.jpg" alt="product img" className={style.basket_item_img} />
                                </span>
                                <span className={style.basket_item_text}>گیفت کارت 20 دلاری Itunes</span>
                            </ul>
                            <ul className={style.basket_item}>
                                <span className={style.basket_item_title}>تعداد:</span>
                                <span className={style.basket_item_text}>483,424,4</span>
                            </ul>
                            <ul className={style.basket_item}>
                                <span className={style.basket_item_title}>جمع کل:</span>
                                <span className={style.basket_item_text}>483,424,4</span>
                            </ul>
                            <ul className={style.basket_item}>
                                <span className={style.basket_item_title}>تخفیف:</span>
                                <span className={style.basket_item_text}>483,424,4</span>
                            </ul>
                            <ul className={style.basket_item}>
                                <span className={style.basket_item_title}>قابل پرداخت:</span>
                                <span className={style.basket_item_text}>483,424,4</span>
                            </ul>
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