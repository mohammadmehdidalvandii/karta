import React from 'react';
import style from './Card.module.css';
import Link from 'next/link'

function Card() {
  return (
    <Link href='' className={style.card}>
    <img src="/images/itunes.jpg" alt="product img" className={style.card_img} />
    <h6 className={style.card_title}>گیفت کارت آیتونز</h6>
    <h6 className={style.card_title}>Itunes</h6>
</Link>
  )
}

export default Card