import React from 'react';
import style from './Login.module.css';

function Login() {
  return (
    <form action="#" className={style.login}>
        <div className='loginRegister_title_text'>
         <h4 className='loginRegister_title'>ورود</h4>
            <span className='loginRegister_text'>اگر اکانت دارید وارد شوید.</span>
        </div>
        <div className="formBox">
            <span className="formBox_text">نام</span>
          <input type="text" className="formBox_input" />
        </div>
        <div className="formBox">
            <span className="formBox_text">رمزعبور</span>
          <input type="text" className="formBox_input" />
        </div>
        <button className="formSubmit">ورود</button>
    </form>
  )
}

export default Login