import React from 'react';
import style from './ContactUs.module.css';
import Title from '@/components/modules/Title/Title';
import Link from 'next/link';
import { FaLocationDot , FaPhoneFlip } from "react-icons/fa6";
import { MdMail } from "react-icons/md";



function ContactUs() {
  return (
    <section className={style.contactUs}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Title title="تماس با ما"/>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className={style.contactUs_wrapper}>
                        <form className={style.contactUs_form}>
                            <div className={style.form_box}>
                                <span className={style.form_box_text}>ایمیل*</span>
                                <input type="text" className={style.form_box_input} />
                            </div>
                            <div className={style.form_box}>
                                <span className={style.form_box_text}>نام*</span>
                                <input type="text" className={style.form_box_input} />
                            </div>
                            <div className={style.form_box}>
                                <span className={style.form_box_text}>شماره تماس*</span>
                                <input type="text" className={style.form_box_input} />
                            </div>
                            <div className={style.form_box}>
                                <span className={style.form_box_text}>موضوع*</span>
                                <input type="text" className={style.form_box_input} placeholder='مثل پشتبانی / خرید / پیگیری'/>
                            </div>
                            <div className={style.form_box}>
                                <span className={style.form_box_text}>موضوع*</span>
                                <textarea type="text" className={style.form_box_textarea} placeholder='پیام شما'/>
                            </div>
                                <button className={style.contactUs_form_submit} >ارسال</button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className={style.contactUs_wrapper}>
                        <h6 className={style.contactUs_title}>اطلاعات ما</h6>
                        <ul className={style.contactUs_items}>
                            <li className={style.contactUs_item}>
                                <span className={style.contactUs_item_icon}><FaLocationDot/></span>
                                <span className={style.contactUs_item_text}>نشانی :</span>
                                <span  className={style.contactUs_item_text}> شیراز شهرک آرین، پارک علم و فناوری فارس</span>
                            </li>
                            <li className={style.contactUs_item}>
                                <span className={style.contactUs_item_icon}><FaPhoneFlip/></span>
                                <Link href='' className={style.contactUs_item_link}>09120000</Link>
                            </li>
                            <li className={style.contactUs_item}>
                                <span className={style.contactUs_item_icon}><FaPhoneFlip/></span>
                                <Link href='' className={style.contactUs_item_link}>021988774</Link>
                            </li>
                            <li className={style.contactUs_item}>
                                <span className={style.contactUs_item_icon}><MdMail/></span>
                                <Link href='' className={style.contactUs_item_link}>info@gmail.com</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactUs