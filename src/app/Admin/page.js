"use client"
import React, { useState } from "react";
import style from "../../styles/Admin.module.css";
import Dashboard from "@/components/template/admin/Dashboard";
import UserList from "@/components/template/admin/UserList";
import Products from "@/components/template/admin/Products";
import Contact from "@/components/template/admin/Contact";
import Order from "@/components/template/admin/Order";
import swal from "sweetalert";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
    const [menu , setMenu]= useState('dashboard')

    const handlerMenu = (MenuID)=>{
        setMenu(MenuID)
    }

    const logoutHandler = ()=>{
      swal(
        {
          title : "آیا از خروج اطمینان دارید؟",
          icon:"warning",
          buttons:["نه","آره",]
        }
      ).then(async(result)=>{
        if(result){
          const res = await fetch("/api/auth/signout",{
            method: "POST",
          });
          if(res.status === 200){
            swal({
              title:"با موفقیت از اکاننت خارج شدید",
              icon:"success",
              buttons:"فهمیدم"
            }).then((result)=>{
              router.replace("/")
              router.refresh( )
            })
          }
        }
      })
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
                  <button className={style.menu_btn} onClick={logoutHandler}>خروج</button>
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
