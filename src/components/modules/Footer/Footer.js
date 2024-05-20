import React from 'react';
import style from './Footer.module.css';
import Link from 'next/link';
import { FaTelegramPlane , FaFacebook  , FaInstagram ,FaWhatsapp } from "react-icons/fa";



function Footer() {
  return (
    <section className={style.footer}>
        <div className={style.footer_partOne}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ul className={style.footer_menu}>
                            <li className={style.footer_menu_item}>
                                <Link href='/Assist' className={style.footer_menu_link}>همکاری با ما</Link>
                            </li>
                            <li className={style.footer_menu_item}>
                                <Link href='/notFound' className={style.footer_menu_link}>گرفتن نمایندگی</Link>
                            </li>
                            <li className={style.footer_menu_item}>
                                <Link href='/notFound' className={style.footer_menu_link}>درباره فروشگاه</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className={style.footer_partTwo}>
            <div className="container">
               <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <p className={style.footer_desc}>کلیه حقوق این سایت متعلق به  فروشگاه انواع گیفت کارت , کارتا می باشد</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <ul className={style.footer_media}>
                            <li className={style.footer_media_item}>
                                <Link href='' className={style.footer_media_link}>
                                        <FaTelegramPlane/>
                                </Link>
                            </li>
                            <li className={style.footer_media_item}>
                                <Link href='' className={style.footer_media_link}>
                                    <FaFacebook/>
                                </Link>
                            </li>
                            <li className={style.footer_media_item}>
                                <Link href='' className={style.footer_media_link}>
                                    <FaInstagram/>
                                </Link>
                            </li>
                            <li className={style.footer_media_item}>
                                <Link href='' className={style.footer_media_link}>
                                    <FaWhatsapp/>
                                </Link>
                            </li>
                        </ul>
                    </div>
               </div>
            </div>
        </div>
    </section>
  )
}

export default Footer