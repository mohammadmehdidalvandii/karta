"use client"
import React, { useEffect, useState } from 'react';
import style from './Navbar.module.css';
import Link from 'next/link';
import { FaUser , FaBars , FaTimes  } from "react-icons/fa";
import { usePathname } from 'next/navigation';


function Navbar() {
    const [showMenu , setShowMenu] = useState(false);
    const [routeMenu , setRouteMenu] =useState("/");
    const [navToTop , setNavToTop] = useState(false)
    const routePath = usePathname();

    // show-menu 
    const handlerShowMenu = ()=>{
        setShowMenu(!showMenu)
    }

    // change route add style
    useEffect(()=>{
        const pathName = routePath
        setRouteMenu(pathName)
    },[routePath])


    // navbar scroll fixed to top
    useEffect(()=>{
        const fixedNavbarToTop = ()=>{
            const currentScroll = window.scrollY;
            if(currentScroll > 120){
                setNavToTop(true)
            }else{
                setNavToTop(false)
            }
        }
        window.addEventListener("scroll", fixedNavbarToTop)

        return ()=> window.removeEventListener("scroll", fixedNavbarToTop)
    },[])
  return (
    <>
        <section className={`${navToTop ? style.nav_fixed : style.navBar} ${"d-none d-md-flex"}`}>
                <div className="container">
                    <div className={style.navbar_wrapper}>
                            <ul className={style.navbar_menu}>
                                <li className={style.navbar_item}>
                                    <Link href='/' className={routeMenu === '/' ? style.navbar_item_link_active : style.navbar_item_link}>خانه</Link>
                                </li>
                                <li className={style.navbar_item}>
                                    <Link href='/Rules' className={routeMenu === '/Rules' ? style.navbar_item_link_active : style.navbar_item_link}>قوانین</Link>
                                </li>
                                <li className={style.navbar_item}>
                                    <Link href='/Contact' className={routeMenu === '/Contact' ? style.navbar_item_link_active : style.navbar_item_link}>تماس باما</Link>
                                </li>
                                <li className={style.navbar_item}>
                                    <Link href='/Question' className={routeMenu === '/Question' ? style.navbar_item_link_active : style.navbar_item_link}>پرسش ها</Link>
                                </li>
                            </ul>

                            <Link href='' className={style.navbar_loginRegister}>
                                <span className={style.navbar_loginRegister_icon}><FaUser/></span>
                                <span className={style.navbar_loginRegister_text}>ثبت نام / ورود</span>
                            </Link>
                    </div>
                </div>
        </section>

        <section className={`${navToTop ? style.nav_fixed : style.navbarRes} ${"d-block d-md-none"}`}>
            <div className="container">
                <div className={style.navbarRes_wrapper}>
                    {showMenu ? (
                           <button className={style.navbarRes_btn} onClick={handlerShowMenu}>
                           <FaTimes />
                       </button>
                    ) :(
                        <button className={style.navbarRes_btn} onClick={handlerShowMenu}>
                        <FaBars/>
                    </button>
                    )}
                   
                           <div className={showMenu ? style.navbarRes_bg_active :style.navbarRes_bg}>
                           <ul className={style.navbarRes_menu}>
                               <li className={style.navbarRes_item}>
                                   <Link href='/' className={routeMenu === '/' ? style.navbar_item_link_active : style.navbar_item_link}>خانه</Link>
                               </li>
                               <li className={style.navbarRes_item}>
                                   <Link href='/Rules' className={routeMenu === '/Rules' ? style.navbar_item_link_active : style.navbar_item_link}>قوانین</Link>
                               </li>
                               <li className={style.navbarRes_item}>
                                   <Link href='/Contact' className={routeMenu === '/Contact' ? style.navbar_item_link_active : style.navbar_item_link}>تماس با ما</Link>
                               </li>
                               <li className={style.navbarRes_item}>
                                   <Link href='/Question' className={routeMenu === '/Question' ? style.navbar_item_link_active : style.navbar_item_link}>پرسش ها</Link>
                               </li>
                           </ul>
                       </div>
                 
                    <Link href='' className={style.navbar_loginRegister}>
                                <span className={style.navbar_loginRegister_icon}><FaUser/></span>
                                <span className={style.navbar_loginRegister_text}>ثبت نام / ورود</span>
                            </Link>
                </div>
            </div>
        </section>
    </>
  )
}

export default Navbar