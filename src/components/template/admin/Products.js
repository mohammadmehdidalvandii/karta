import React from 'react';
import style from './Products.module.css';
import Pheader from '@/components/modules/P-header/P-header';

function Products() {
  return (
    <section className={style.products}>
        <div className="row">
            <div className="col-12">
                <Pheader text='محصولات '/>
            </div>
        </div>
        <div className="row mt-5">
           <div className="col-12">
            <div className={style.products_wrapper}>
            <div className={style.products_item}>
                    <img src="/images/itunes.jpg" alt="product" className={style.products_item_img} />
                    <h6 className={style.products_item_name}>itunes</h6>
                    <span className={style.products_item_count}>موجود : 12</span>
                    <span className={style.products_item_priceModel}>قیمت : 50 دلاری</span>
                    <div className={style.products_item_buttons}>
                        <button className={style.products_item_btn}>ویرایش</button>
                        <button className={style.products_item_btn}>حذف</button>
                    </div>
                </div>
            <div className={style.products_item}>
                    <img src="/images/itunes.jpg" alt="product" className={style.products_item_img} />
                    <h6 className={style.products_item_name}>itunes</h6>
                    <span className={style.products_item_count}>موجود : 12</span>
                    <span className={style.products_item_priceModel}>قیمت : 50 دلاری</span>
                    <div className={style.products_item_buttons}>
                        <button className={style.products_item_btn}>ویرایش</button>
                        <button className={style.products_item_btn}>حذف</button>
                    </div>
                </div>
            <div className={style.products_item}>
                    <img src="/images/itunes.jpg" alt="product" className={style.products_item_img} />
                    <h6 className={style.products_item_name}>itunes</h6>
                    <span className={style.products_item_count}>موجود : 12</span>
                    <span className={style.products_item_priceModel}>قیمت : 50 دلاری</span>
                    <div className={style.products_item_buttons}>
                        <button className={style.products_item_btn}>ویرایش</button>
                        <button className={style.products_item_btn}>حذف</button>
                    </div>
                </div>
            </div>
           </div>
        </div>
    </section>
  )
}

export default Products