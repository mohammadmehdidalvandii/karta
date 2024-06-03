import React from 'react';
import style from './ProductCard.module.css';
import Link from 'next/link';

function ProductCard({name , price}) {
  return (
    <Link href='/' className={style.productCard}>
        <img src="/images/itunes.jpg" alt="product img" className={style.productCard_img} />
        <h6 className={style.productCard_name}>{name}</h6>
        <span className={style.productCard_price}>{price} دلاری</span>
    </Link>
  )
}

export default ProductCard