import React from 'react';
import style from './Register.module.css';

function Register() {
  return (
  <form action="#" className={style.register}>
        <div className='loginRegister_title_text'>
         <h4 className='loginRegister_title'>ثبت نام</h4>
            <span className='loginRegister_text'>اگر اکانت ندارید ثبت نام کنید.</span>
        </div>
        <div className="formBox">
            <span className="formBox_text">ایمیل</span>
            <input type="text" className="formBox_input" />
        </div>
        <div className="formBox">
            <span className="formBox_text">نام کاربری</span>
            <input type="text" className="formBox_input" />
        </div>
        <div className="formBox">
            <span className="formBox_text">شماره همراه</span>
            <input type="text" className="formBox_input" />
        </div>
        <div className="formBox">
            <span className="formBox_text">رمزعبور</span>
            <input type="text" className="formBox_input" />
        </div>
        <div className="formBox">
            <span className="formBox_text">تکرار رمز عبور</span>
            <input type="text" className="formBox_input" />
        </div>
        <button className="formSubmit">ارسال</button>
  </form>
  )
}

export default Register