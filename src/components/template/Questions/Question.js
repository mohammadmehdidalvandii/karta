import React from "react";
import style from "./Question.module.css";
import Title from "@/components/modules/Title/Title";
import Accordion from "@/components/modules/Accordion/Accordion";


function Question() {
   

  return (
    <section className={style.question}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Title title="سوالات متداول" />
          </div>
        </div>
        <div className="row mt-5">
            <Accordion/>
            <Accordion/>
            <Accordion/>
        </div>
      </div>
    </section>
  );
}

export default Question;
