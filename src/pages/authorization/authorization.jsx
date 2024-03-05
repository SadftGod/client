import React,{ useState } from 'react';
import './dist/authorization.css';


export default function Authorization(){
   const [title, setTitle] = useState("My account");

   const authSwitch = ()=>{
      if(title !== "Register")
         setTitle("Register")
   }

   return (
      <div className="login_con">
         <div className="login_title">{title}</div>
         <div className="login">

            <div className="login_fields_con">
               <input placeholder="Email" id='login_name' name='login_name' className='dynamicInput' type="text" required/>
               <label htmlFor="login_name" className="dynamicLabel">Email address</label>
            </div>
            <div className="login_fields_con register_fields">
               <input placeholder="Email" id='password_field' name='password_field' className='dynamicInput' type="text" required/>
               <label htmlFor="password_field" className="dynamicLabel">Password</label>
            </div>
            <div className="forgot"> <div className="forgot_text">Forgot your password?</div> </div>

            <button className="login_btn">Login</button>
            <div className="new_cus"><div className="new_cus_text">New customer ?</div> </div>
            <div className="reg_btn_con"><button onClick={authSwitch} className='register_btn'>Register</button></div>
         </div>
      </div>
   )
}