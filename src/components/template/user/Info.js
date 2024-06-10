import React from 'react';
import style from './Info.module.css';
import Pheader from '@/components/modules/P-header/P-header';

function Info() {
  return (
    <section className={style.info}>
        <div className="row">
            <div className="col-12">
                <Pheader text='اطلاعات'/>
            </div>
        </div>
        <div className="row mt-4">
            <div className="col-12">
                <div className={style.info_wrapper}>
                    <div className={style.info_account}>
                        <ul className={style.info_account_items}>
                            <li className={style.info_account_item}>
                                <h6 className={style.info_account_title}>نام و نام خانوادگی :</h6>
                                <span className={style.info_account_text}>محمد محمدی</span>
                            </li>
                            <li className={style.info_account_item}>
                                <h6 className={style.info_account_title}>ایمیل :</h6>
                                <span className={style.info_account_text}>mohammadmdi@gmail.com</span>
                            </li>
                            <li className={style.info_account_item}>
                                <h6 className={style.info_account_title}>شماره همراه :</h6>
                                <span className={style.info_account_text}>0912121212</span>
                            </li>
                            <li className={style.info_account_item}>
                                <h6 className={style.info_account_title}>آدرس :</h6>
                                <span className={style.info_account_text}>تهران  جنت اباد شمالی</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="row mt-4">
            <div className="col-12">
                <div className={style.info_wrapper}>
                    <div className={style.info_change}>
                        <div className={style.info_change_wrapper}>
                            <input type="text" className={style.info_change_input} placeholder='نام ونام خانوادگی' />
                            <input type="text" className={style.info_change_input} placeholder='ایمیل ' />
                        </div>
                        <div className={style.info_change_wrapper}>
                            <input type="text" className={style.info_change_input} placeholder='شماره همراه ' />
                            <input type="text" className={style.info_change_input} placeholder='آدرس ' />
                        </div>
                        <button className={style.info_change_btn}>اعمال تغییر</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Info