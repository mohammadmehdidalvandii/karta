"use client"
import React, { useState } from 'react';
import style from './Accordion.module.css';
import { FaQuestion } from "react-icons/fa6";

function Accordion() {
    const [showAccordion , setShowAccordion] = useState(false)

    const handlerAccordionShow = ()=>[
        setShowAccordion(!showAccordion)
    ]
  return (
    <div className="col-12">
    <div className={style.accordion}>
      <div className={style.accordion_title_icon} onClick={handlerAccordionShow}>
        <h6 className={style.accordion_title}>
          با اسکریپت کارتا چه محصولاتی را می توانیم بفروشیم و با آن به
          در آمد برسیم؟
        </h6>
        <span className={style.accordion_icon}>
          <FaQuestion />
        </span>
      </div>
      <p className={showAccordion ? style.accordion_active : style.accordion_desc}>
        اسکریپت کارتا مناسب فروشگاه های است که بعد از فروش به
        خریدار(کاربر سایت) یوزرنیم، رمز، سریال یا داده هایی شبیه کد
        ارائه می دهند. برای مثال کارت شارژ ها، گیفت کارت ها(از جمله:
        آیتونز، گوگل پلی، ایکس باکس، استیم، اسپاتیفای آمریکا و )، اکانت
        های بازی، دبیت کارت ها، سرویس کاهش پینگ، لایسنس نود ۳۲، سرویس
        کریو، اکانت های نرم افزاری و با اسکریپت کارتا قابل فروش هستند.
      </p>
    </div>
  </div>
  )
}

export default Accordion