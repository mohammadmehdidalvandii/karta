"use client"
import React, { useState } from 'react';
import style from '../../styles/User.module.css';

function page() {
    const [activeMenu , setActiveMenu] = useState("Dashboard");

    // handler change Menu ;
    const handlerMenu = (menuID)=>{
        setActiveMenu(menuID);
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
                                    <button className={style.user_item_menu}>خروج</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12">
                        {activeMenu === "Dashboard" && (<h1>Dashboard</h1>)}
                        {activeMenu === "Order" && (<h1>Order</h1>)}
                        {activeMenu === "info" && (<h1>info</h1>)}
                    </div>
                </div>
            </div>
        </section>
  )
}

export default page