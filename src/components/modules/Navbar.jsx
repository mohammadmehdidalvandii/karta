import React from 'react';
import style from './Navbar.module.css';
import Link from 'next/link';
import { FaUser } from "react-icons/fa";


function Navbar() {
  return (
   <section className={style.navBar}>
        <div className="container">
            <div className={style.navbar_wrapper}>
                    <ul className={style.navbar_menu}>
                        <li className={style.navbar_item}>
                            <Link href='' className={style.navbar_item_link}>خانه</Link>
                        </li>
                        <li className={style.navbar_item}>
                            <Link href='' className={style.navbar_item_link}>قوانین</Link>
                        </li>
                        <li className={style.navbar_item}>
                            <Link href='' className={style.navbar_item_link}>تماس باما</Link>
                        </li>
                        <li className={style.navbar_item}>
                            <Link href='' className={style.navbar_item_link}>پرسش ها</Link>
                        </li>
                    </ul>

                    <Link href='' className={style.navbar_loginRegister}>
                        <span className={style.navbar_loginRegister_icon}><FaUser/></span>
                        <span className={style.navbar_loginRegister_text}>ثبت نام / ورود</span>
                    </Link>
            </div>
        </div>
   </section>
  )
}

export default Navbar