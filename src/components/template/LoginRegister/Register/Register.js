import React, { useState } from 'react';
import style from './Register.module.css';
import { showSwal } from '@/utils/helpers';
import { validationEmail, validationPassword, validationPhone } from '@/utils/auth';
import swal from 'sweetalert';
import { useRouter } from 'next/navigation';

function Register() {
    const router = useRouter();
    const [email , setEmail] = useState("");
    const [name , setName] = useState("");
    const [phone , setPhone] = useState("");
    const [password , setPassword] = useState("");
    const [rePassword , setRePassword] = useState("");
    const [role , setRole ] = useState("");
  
    const signUp = async (event)=>{
        event.preventDefault();
        if(!name.trim()){
            return showSwal("نام اجباری است","error","تلاش مجدد");
        } 
         if(name.length < 4){
            showSwal("نام کاربری حداقل 4 حرف","error","تلاش مجدد")
        }

        const isValidPhone = validationPhone(phone);
        if(!isValidPhone){
            return showSwal("شماره تماس وارد شد معتبر نیست","error","تلاش مجدد")
        }

        const isValidEmail = validationEmail(email);
        if(!isValidEmail){
            return showSwal("ایمیل وارد شد معتبر نیست ","error","تلاش مجدد")
        }

        const isValidPassword = validationPassword(password ,rePassword);
        if(!isValidPassword){
            return showSwal("رمزعبور وارد شد قابل حدس هست","error","تلاش مجدد")
        }

        if(password !== rePassword ){
            return showSwal("رمزعبور هماهنگ نیست","error","تلاش مجدد")
        }

        const user = {name , phone , email , password};

        const res = await fetch("/api/auth/signup",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(user),
        });

        const data = await res.json();

        if(res.status === 201){
            const {user, role} = data;
            setRole(role)
            swal({
                title:"ثبت نام با موفقیت انجام شد",
                icon:"success",
                buttons:"ورود به پنل کاربری"
            }).then(()=>{
                router.replace(role === "ADMIN" ? 'Admin' : 'User')
                router.refresh()
            })
        } else if(res.status === 422){
            showSwal("کاربر با این اطلاعات از قبل وجود دارد","error","تلاش مجدد")
        }
    }


  return (
  <form action="#" className={style.register}>
        <div className='loginRegister_title_text'>
         <h4 className='loginRegister_title'>ثبت نام</h4>
            <span className='loginRegister_text'>اگر اکانت ندارید ثبت نام کنید.</span>
        </div>
        <div className="formBox">
            <span className="formBox_text">ایمیل</span>
            <input
             type="email"
              className="formBox_input"
              value={email}
              onChange={(event)=>setEmail(event.target.value)}
              />
        </div>
        <div className="formBox">
            <span className="formBox_text">نام کاربری</span>
            <input
             type="text" 
             className="formBox_input" 
             value={name}
             onChange={(event)=>setName(event.target.value)}
             />
        </div>
        <div className="formBox">
            <span className="formBox_text">شماره همراه</span>
            <input
             type="text" 
             className="formBox_input" 
             value={phone}
             onChange={(event)=>setPhone(event.target.value)}
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
        <div className="formBox">
            <span className="formBox_text">تکرار رمز عبور</span>
            <input
             type="password" 
             className="formBox_input" 
             value={rePassword}
             onChange={(event)=>setRePassword(event.target.value)}
             />
        </div>
        <button className="formSubmit" onClick={signUp}>ارسال</button>
  </form>
  )
}

export default Register