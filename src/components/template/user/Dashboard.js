import React from 'react';
import style from './Dashboard.module.css';
import Pheader from '@/components/modules/P-header/P-header';
import { MdBorderColor  , MdOutlineAttachMoney , MdDiscount} from "react-icons/md";


function Dashboard() {
  return (
    <section className={style.dashboard}>
        <div className="row">
            <div className="col-12">
                <Pheader text='پیشخوان'/>
            </div>
        </div>
        <div className="row mt-5">
            <div className={style.dashboard_info}>
                <img src="/images/user.png" alt="user" className={style.dashboard_info_img} />
                <h5 className={style.dashboard_info_user}>محمد محمدی</h5>
                <span className={style.dashboard_info_role}>کاربر</span>
            </div>
        </div>
        <div className="row mt-5">
            <div className={style.dashboard_items}>
                <div className={style.dashboard_item}>
                    <div className={style.dashboard_item_content}>
                        <div className={style.dashboard_item_number}>12</div>
                        <div className={style.dashboard_item_text}>تعداد سفارشات</div>
                    </div>
                    <span className={style.dashboard_item_icon}><MdBorderColor/></span>
                </div>
                <div className={style.dashboard_item}>
                    <div className={style.dashboard_item_content}>
                        <div className={style.dashboard_item_number}>13,987,000 تومان</div>
                        <div className={style.dashboard_item_text}>مجموع خرید</div>
                    </div>
                    <span className={style.dashboard_item_icon}><MdOutlineAttachMoney/></span>
                </div>
                <div className={style.dashboard_item}>
                    <div className={style.dashboard_item_content}>
                        <div className={style.dashboard_item_number}>4,899,000 تومان</div>
                        <div className={style.dashboard_item_text}>مجموع تخفیف</div>
                    </div>
                    <span className={style.dashboard_item_icon}><MdDiscount/></span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Dashboard