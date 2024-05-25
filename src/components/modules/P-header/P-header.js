import React from 'react';
import style from './P-header.module.css';
import Link from 'next/link';

function Pheader({text}) {
  return (
    <div className={style.pHeader}>
        <span className={style.pHeader_text}>{text}</span>
        /
        <Link href='/' className={style.pHeader_link}>خانه</Link>
    </div>
  )
}

export default Pheader