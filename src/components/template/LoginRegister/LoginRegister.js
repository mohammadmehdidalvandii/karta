"use client"
import React, { useState } from 'react';
import style from './LoginRegister.module.css';
import Login from './Login';
import Register from './Register/Register';

function LoginRegister() {
    const [changeMenu , setChangeMenu] = useState('Login')

    const handlerMenu = (MenuID)=>{
        setChangeMenu(MenuID)
    }

  return (
    <section className={style.loginRegister}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className={style.loginRegister_wrapper}>
                        {changeMenu === "Login" ? (
                            <button className={style.loginRegister_btn} onClick={()=>handlerMenu("Register")}>ثبت نام</button>
                        ) :(
                            <button className={style.loginRegister_btn} onClick={()=>handlerMenu("Login")}>ورود</button>
                        )}
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    {changeMenu === "Login" &&( 
                        <Login/>
                    )}

                    {changeMenu === 'Register' && (
                          <Register/>
                    )}
                </div>
            </div>
        </div>
    </section>
  )
}

export default LoginRegister