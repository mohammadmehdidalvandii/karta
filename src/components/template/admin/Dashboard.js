import React from 'react';
import style from './Dashboard.module.css';
import Pheader from '@/components/modules/P-header/P-header';
import { FaUser } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { MdShoppingCart , MdAttachMoney } from "react-icons/md";




function Dashboard() {
  return (
    <section className={style.dashboard}>
      <div className="row">
        <div className="col-12">
            <Pheader text='پیشخوان'/>
        </div>
      </div>
      <div className="row mt-5">
           <div className="col-12">
           <div className={style.dashboard_info}>
                <img src="/images/user.png" alt="" className={style.dashboard_info_img} />
                <div className={style.dashboard_info_content}>
                    <span className={style.dashboard_info_name}>الکس امینی</span>
                    <span className={style.dashboard_info_status}>ادمین سایت</span>
                </div>
            </div>
           </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className={style.dashboard_item}>
                <div className={style.dashboard_item_content}>
                    <span className={style.dashboard_item_number}>1</span>
                    <span className={style.dashboard_item_title}>مدیر</span>
                </div>
                <span className={style.dashboard_item_icon}><FaUser/></span>
            </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className={style.dashboard_item}>
                <div className={style.dashboard_item_content}>
                    <span className={style.dashboard_item_number}>8</span>
                    <span className={style.dashboard_item_title}>محصول</span>
                </div>
                <span className={style.dashboard_item_icon}><AiOutlineProduct/></span>
            </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className={style.dashboard_item}>
                <div className={style.dashboard_item_content}>
                    <span className={style.dashboard_item_number}>10</span>
                    <span className={style.dashboard_item_title}>سفارش روزانه</span>
                </div>
                <span className={style.dashboard_item_icon}><MdShoppingCart/></span>
            </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className={style.dashboard_item}>
                <div className={style.dashboard_item_content}>
                    <span className={style.dashboard_item_number}>6,890,000 - تومان</span>
                    <span className={style.dashboard_item_title}> فروش روزانه</span>
                </div>
                <span className={style.dashboard_item_icon}><MdAttachMoney/></span>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard