import React from 'react';
import style from '../styles/not-found.module.css'
import Link from 'next/link';

function notFound() {
  return (
    <section className={style.notFound}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className={style.notFound_content}>
                       <h2 className={style.notFound_content_title}>این صفحه موجود نیست </h2>
                       <span className={style.notFound_content_text}>این صفحه درحال توسعه میباشد از صبوری شما ممنونیم ❤️</span>
                       <Link href='/' className={style.notFound_content_link}>برگشت به خانه</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default notFound