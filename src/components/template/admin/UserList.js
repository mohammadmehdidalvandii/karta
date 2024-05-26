import React from 'react';
import style from './UserList.module.css';
import Pheader from '@/components/modules/P-header/P-header';

function UserList() {
  return (
    <section className={style.userList}>
        <div className="row">
            <div className="col-12">
                <Pheader text='لیست کاربران سایت'/>
            </div>
        </div>
            <div className="row mt-5">
                <div className="col-12">
                    <div className={style.userList_Wrapper}>
                        <table className={style.userList_table}>
                            <thead className={style.userList_thead}>
                                <th className={style.userList_th}>#</th>
                                <th className={style.userList_th}>نام</th>
                                <th className={style.userList_th}>نام خانوادگی</th>
                                <th className={style.userList_th}>همراه</th>
                                <th className={style.userList_th}>ایمیل</th>
                                <th className={style.userList_th}>عملیات</th>
                            </thead>
                            <tbody className={style.userList_tbody}>
                                <tr className={style.userList_tr}>
                                    <th>1</th>
                                    <th>محمدمهدی </th>
                                    <th>دالوندی</th>
                                    <th>09390000</th>
                                    <th>mohammadmehdie@gmail.com</th>
                                    <th>
                                    <div className={style.userList_btns}>
                                            <span className={style.userList_btn}>حذف</span>
                                            <span className={style.userList_btn}>ویرایش</span>
                                        </div>
                                    </th>
                                </tr>
                                <tr className={style.userList_tr}>
                                    <th>1</th>
                                    <th>محمدمهدی </th>
                                    <th>دالوندی</th>
                                    <th>09390000</th>
                                    <th>mohammadmehdie@gmail.com</th>
                                    <th>
                                        <div className={style.userList_btns}>
                                            <span className={style.userList_btn}>حذف</span>
                                            <span className={style.userList_btn}>ویرایش</span>
                                        </div>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default UserList