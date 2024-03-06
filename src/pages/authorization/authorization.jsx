import React, { useState } from 'react';
import './dist/authorization.css';
import ResetPassword from '../../modal-menu/passwordreset/passwordrese';
import { useNavigate } from "react-router-dom";

export default function Authorization() {
   const [title, setTitle] = useState("My account");
   const [resetModal, setResetModal] = useState(false)

   const navigate = useNavigate();

   const nav = (name) => {
      navigate(name);
    };

   const login = ()=>{
      nav('/')
   }

   const authSwitch = (action) => {
      const login = document.querySelector('.login')
      const register = document.querySelector('.register')
      const title = document.querySelector('.login_title')
      if (action === 'register') {
         setTitle("Register")

         title.style.margin = "6.9vh 0 2.9vh 0"

         login.style.height = "0"
         login.style.padding = "0"
         login.style.boxShadow = "none"
         login.style.border = "none"


         register.style.height = "74.3vh"
         register.style.padding = "1.35% 0 0 0"
         register.style.boxShadow = "0.247vw 0.39vh 1.38vw rgba(0, 0, 0, 0.164)"
         register.style.border = "1px solid #D9D9D9"
      } else if (action === "login") {
         setTitle("My account")

         title.style.margin = "6.9vh 0"

         register.style.height = "0"
         register.style.padding = "0"
         register.style.boxShadow = "none"
         register.style.border = "none"


         login.style.height = "63.7vh"
         login.style.padding = "2.35% 0 0 0"
         login.style.boxShadow = "0.247vw 0.39vh 1.38vw rgba(0, 0, 0, 0.164)"
         login.style.border = "1px solid #D9D9D9"

      }
   }

   const ResetPasswords = () => {
      if(resetModal !== true){
         setResetModal(true)
      }else{
         setResetModal(false)
      }

   }

   return (
      <div className="login_con">
         <div className="login_title">{title}</div>
         <div className='auth_con'>
            <div className="login">

               <div className="login_fields_con">
                  <input placeholder="Email" id='login_name' name='login_name' className='dynamicInput' type="text" required />
                  <label htmlFor="login_name" className="dynamicLabel">Email address</label>
               </div>
               <div className="login_fields_con register_fields">
                  <input placeholder="Email" id='password_field' name='password_field' className='dynamicInput' type="text" required />
                  <label htmlFor="password_field" className="dynamicLabel">Password</label>
               </div>
               <div onClick={() => { ResetPasswords() }} className="forgot"> <div className="forgot_text">Forgot your password?</div> </div>
               <div onClick={()=>{login()}} className="button_container">
                  <button className="login_btn">Login</button>
                  <button className="login_btn_hover">Login</button>
               </div>
               <div className="new_cus"><div className="new_cus_text">New customer ?</div> </div>
               <div className="reg_btn_con"><button onClick={() => { authSwitch("register") }} className='register_btn'>Register</button></div>
            </div>
            <div className="register">
               <div className="register_fields_con">
                  <input placeholder="Email" id='first_name_field' name='first_name_field' className='dynamicInputreg' type="text" required />
                  <label htmlFor="first_name_field" className="dynamicLabelr">First name*</label>
               </div>
               <div className="register_fields_con register_fields">
                  <input placeholder="Email" id='last_name_field' name='last_name_field' className='dynamicInputreg' type="text" required />
                  <label htmlFor="last_name_field" className="dynamicLabelr">Last name*</label>
               </div>
               <div className="register_fields_con register_fields">
                  <input placeholder="Email" id='email_adress_field' name='email_adress_field' className='dynamicInputreg' type="text" required />
                  <label htmlFor="email_adress_field" className="dynamicLabelr">Email adress*</label>
               </div>
               <div className="register_fields_con register_fields">
                  <input placeholder="Email" id='pass_field' name='pass_field' className='dynamicInputreg' type="text" required />
                  <label htmlFor="pass_field" className="dynamicLabelr">Password*</label>
               </div>
               <div className="button_containerR">
                  <button className="login_btn">Register</button>
                  <button className="login_btn_hover">Register</button>
               </div>
               <div className='back_to_login'><div>You already have an account? To <span className="back_to_login_text" onClick={() => { authSwitch('login') }}>login</span></div> </div>


            </div>

         </div>

         {
            resetModal && (
               <ResetPassword ResetPasswords={ResetPasswords} />
            )
         }
      </div>
   )
}