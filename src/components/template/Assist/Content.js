import React from "react";
import style from "./Content.module.css";
import Title from "@/components/modules/Title/Title";

function Content() {
  return (
    <section className={style.assist}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Title title="همکاری با ما" />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <div className={style.assist_content}>
              <h5 className={style.assist_content_title}>
                همکاری با چگونه است ؟
              </h5>
              <p className={style.assist_content_desc}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
              <h5 className={style.assist_content_title}>
               شرایط همکاری با ماچگونهاست ؟
              </h5>
              <p className={style.assist_content_desc}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
              <h5 className={style.assist_content_title}>
                قوانین همکای با ما
              </h5>
                <ul className={style.assist_items}>
                    <li className={style.assist_item}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</li>
                    <li className={style.assist_item}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</li>
                    <li className={style.assist_item}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</li>
                    <li className={style.assist_item}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</li>
                    <li className={style.assist_item}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</li>
                </ul>

                <h5 className={style.assist_content_title}>
                    روزمه خود را برای ما ارسال کنید
              </h5>
                <div className={style.assist_resume}>
                    <input type="file" className={style.assist_resume_input}/>
                    <button className={style.assist_resume_btn}>ارسال</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
