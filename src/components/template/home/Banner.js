import React from 'react';
import style from './Banner.module.css';

function banner() {
  return (
    <section className={style.banner}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className={style.banner_wrapper}>
                         <h1 className={style.banner_title}>خیلی سریع راحت هرگیفت کارتی را نیاز داری خرید بکن </h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default banner