import React from 'react';
import style from './ProductCard.module.css';
import Link from 'next/link';

function ProductCard() {
  return (
    <Link href='/' className={style.productCard}>
        <img src="/images/itunes.jpg" alt="product img" className={style.productCard_img} />
        <h6 className={style.productCard_name}>گیفت کارت آیتونز</h6>
        <span className={style.productCard_price}>20 دلاری</span>
    </Link>
  )
}

export default ProductCard