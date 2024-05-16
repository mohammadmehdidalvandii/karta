import React from 'react';
import style from './Title.module.css';

function Title({title}) {
  return (
    <h4 className={style.title}>{title}</h4>
  )
}

export default Title