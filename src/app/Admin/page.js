"use client"
import React, { useState } from "react";
import style from "../../styles/Admin.module.css";
import Dashboard from "@/components/template/admin/Dashboard";
import UserList from "@/components/template/admin/UserList";
import Products from "@/components/template/admin/Products";
import Contact from "@/components/template/admin/Contact";
import Order from "@/components/template/admin/Order";

function page() {
    const [menu , setMenu]= useState('dashboard')

    const handlerMenu = (MenuID)=>{
        setMenu(MenuID)
    }

  return (
    <section className={style.admin}>
      <div className="containers">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm1-12">
            <div className={style.admin_wrapper}>
              <ul className={style.menu_items}>
                <li className={style.menu_item}>
                  <button className={menu === 'dashboard' ? style.menu_btn_active  : style.menu_btn} onClick={()=>handlerMenu('dashboard')} >پیشخوان</button>
                </li>
                <li className={style.menu_item}>
                  <button className={menu === 'user_list' ? style.menu_btn_active : style.menu_btn} onClick={()=>handlerMenu('user_list')} >لیست کاربران</button>
                </li>
                <li className={style.menu_item}>
                  <button className={menu === 'product' ? style.menu_btn_active : style.menu_btn} onClick={()=>handlerMenu('product')} >محصولات</button>
                </li>
                <li className={style.menu_item}>
                  <button className={menu === 'contact' ? style.menu_btn_active : style.menu_btn} onClick={()=>handlerMenu('contact')} >تماس با ما</button>
                </li>
                <li className={style.menu_item}>
                  <button className={menu === 'order' ? style.menu_btn_active : style.menu_btn} onClick={()=>handlerMenu('order')} >سفارشات</button>
                </li>
                <li className={style.menu_item}>
                  <button className={style.menu_btn}>خروج</button>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-9 col-md-9 col-sm1-12">
                {menu === 'dashboard' && (<Dashboard/>)}
                {menu === 'user_list' && (<UserList/>)}
                {menu === 'product' && (<Products/>)}
                {menu === 'contact' && (<Contact/>)}
                {menu === 'order' && (<Order/>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
