import React from 'react';
import style from './Breadcrumb.module.css';
import Link from 'next/link';

function Breadcrumb({title}) {
  return (
    <section className={style.breadcrumb}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className={style.breadcrumb_content}>
                        <span className={style.breadcrumb_title}>{title}</span>
                        <span className={style.breadcrumb_icon}>/</span>
                        <Link href='/' className={style.breadcrumb_link}>خانه</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Breadcrumb