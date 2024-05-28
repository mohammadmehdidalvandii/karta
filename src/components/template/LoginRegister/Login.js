import React, { useState } from 'react';
import style from './Login.module.css';
import { showSwal } from '@/utils/helpers';
import { validationEmail, validationPassword } from '@/utils/auth';
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation';
import swal from 'sweetalert';

function Login() {
  const router = useRouter()
  const [email , setEmail ] = useState('');
  const [password , setPassword] = useState('');

  const signIn = async (event)=>{
    event.preventDefault();
    if(!email.trim() || !password.trim()){
      return showSwal("لطفا نام و رمزعبور وارد کنید","error","تلاش مجدد")
    }

    const isValidEmail = validationEmail(email);
    if(!isValidEmail){
      return showSwal("ایمیل یا رمزعبور خودرا درست وارد کنید","error","تلاش مجدد")
    }
    
    const isValidPassword = validationPassword(password);
    if(!isValidPassword){
      return showSwal("ایمیل یا رمزعبور اشتباه است","error","تلاش مجدد")
    }

    const user = {email , password};

    const res = await fetch("/api/auth/signin", {
      method:"POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(user),
    })

    const data = await res.json();

    console.log("Response ---> " , res)
    if(res.status === 200){
      swal({
        title: "با موفقیت لاگین شدین",
        icon: "success",
        buttons: "ورود به پنل کاربری",
      }).then(() => {
        router.replace("Admin");
      });
    } else if(res.status === 422 || res.status === 401){
      showSwal("کاربری با این اطلاعات یافت نشد","error","تلاش مجدد")
    } else if(res.status === 419){
      showSwal("ایمیل یا پسورد صحیح نیست","error","تلاش مجدد")
    }
  };

  return (
    <form action="#" className={style.login}>
        <div className='loginRegister_title_text'>
         <h4 className='loginRegister_title'>ورود</h4>
            <span className='loginRegister_text'>اگر اکانت دارید وارد شوید.</span>
        </div>
        <div className="formBox">
            <span className="formBox_text">ایمیل</span>
          <input
           type="text"
            className="formBox_input"
            value={email}
            onChange={(event)=>setEmail(event.target.value)}
            />
        </div>
        <div className="formBox">
            <span className="formBox_text">رمزعبور</span>
          <input
           type="password"
            className="formBox_input"
            value={password}
            onChange={(event)=>setPassword(event.target.value)}
            />
        </div>
        <button className="formSubmit" onClick={signIn}>ورود</button>
    </form>
  )
}

export default Login