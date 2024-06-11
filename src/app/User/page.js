"use client"
import React, { useState } from 'react';
import style from '../../styles/User.module.css';
import Dashboard from '@/components/template/user/Dashboard';
import Order from '@/components/template/user/Order';
import Info from '@/components/template/user/info';
import swal from 'sweetalert';
import { useRouter } from 'next/navigation';


function page() {
    const router = useRouter();
    const [activeMenu , setActiveMenu] = useState("Dashboard");

    // handler change Menu ;
    const handlerMenu = (menuID)=>{
        setActiveMenu(menuID);
    }

    // logoutHandler 

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
        <section className={style.user}>
            <div className="containers">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className={style.user_wrapper}>
                            <ul className={style.user_items}>
                                <li className={style.user_item}>
                                    <button className={activeMenu === 'Dashboard' ? style.user_item_menu_active : style.user_item_menu}  onClick={()=>handlerMenu("Dashboard")}>پیشخوان</button>
                                </li>
                                <li className={style.user_item}>
                                    <button className={activeMenu === 'Order' ? style.user_item_menu_active : style.user_item_menu}  onClick={()=>handlerMenu("Order")}>سفارشات</button>
                                </li>
                                <li className={style.user_item}>
                                    <button className={activeMenu === 'info' ? style.user_item_menu_active : style.user_item_menu}  onClick={()=>handlerMenu("info")}>اطلاعات</button>
                                </li>
                                <li className={style.user_item}>
                                    <button className={style.user_item_menu} onClick={logoutHandler}>خروج</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12">
                        {activeMenu === "Dashboard" && (<Dashboard/>)}
                        {activeMenu === "Order" && (<Order/>)}
                        {activeMenu === "info" && (<Info/>)}
                    </div>
                </div>
            </div>
        </section>
  )
}

export default page