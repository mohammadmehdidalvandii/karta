import React from 'react';
import style from './Contact.module.css';
import Pheader from '@/components/modules/P-header/P-header';

function Contact() {
  return (
    <section className={style.contact}>
        <div className="row">
            <div className="col-12">
                <Pheader text='تماس با ما '/>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-12">
            <div className={style.contact_wrapper}>
                <ul className={style.contact_item}>
                    <li>محمدمهدی دالوندی</li>
                    <li>09390000</li>
                    <li>خرید انجام دادم تایید نشد</li>
                    <li>mohammadmehdo@gmail.com</li>
                    <li className={style.contact_item_buttons}>
                        <button className={style.contact_item_btn}>تایید </button>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Contact