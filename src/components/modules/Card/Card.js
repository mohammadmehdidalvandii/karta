import React from 'react';
import style from './Card.module.css';
import Link from 'next/link'

function Card({title , name, id}) {
  return (
    <Link href={`/${id}`} className={style.card}>
    <img src="/images/itunes.jpg" alt="product img" className={style.card_img} />
    <h6 className={style.card_title}>{name}</h6>
    <h6 className={style.card_title}>{title}</h6>
</Link>
  )
}

export default Card