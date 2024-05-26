import React from 'react';
import style from './Order.module.css';
import Pheader from '@/components/modules/P-header/P-header';

function Order() {
  return (
    <section className={style.order}>
        <div className="row">
            <div className="col-12">
                <Pheader text='لیست تراکنش'/>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-12">
                <div className={style.order_wrapper}>
                    <table className={style.order_table}>
                        <thead className={style.order_table_thead}>
                            <th>#</th>
                            <th>شماره پیگیری</th>
                            <th>نام/خانوادگی</th>
                            <th>کوپن</th>
                            <th>مبلغ</th>
                            <th>محصول</th>
                            <th>وضعیت</th>
                            <th>تاریخ</th>
                        </thead>
                        <tbody className={style.order_table_tbody}>
                            <tr className={style.order_table_tr}>
                                <th>1</th>
                                <th>#123446</th>
                                <th>محمدمهدی</th>
                                <th>-</th>
                                <th>864,000</th>
                                <th>itunes</th>
                                <th>پرداخت شد</th>
                                <th>22 / 03 /1403</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Order