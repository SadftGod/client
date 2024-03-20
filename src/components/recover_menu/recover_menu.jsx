import React, { useState,useEffect } from "react";
import './dist/recover_menu.css'
import password from "../../services/recoverPass/recover.service";

export default function RecoverMenu() {
   const [new_pass,setNew_Pass] = useState('')
   const [new_passCon,setNewPassCon] = useState('')
   const [cypher,setCypher] = useState('')

   const raw_data = ()=>{
      const cyphere = window.location.pathname.replace('/recover/','')
      setCypher(cyphere)
   }

   useEffect(() => {
      raw_data()
   }, [cypher]);
   const change_pass = async()=>{
      raw_data()
      const response = await password.decypher(cypher)
      console.log(response)
      return response
   }

   return (
      <div className="recover_menu_con">
         <div className="recover_menu">

            <div className="recover_menu_fields_con">
               <input value={new_pass} onChange={(e) => { setNew_Pass(e.target.value) }} placeholder="new_pass" id='new_pass' name='new_pass' className='dynamicInputRecover' type="text" title='enter new password' required />
               <label htmlFor="new_pass" className="dynamicLabelRecover">New Password</label>
            </div>
            <div className="recover_menu_fields_con register_fields">
               <input value={new_passCon} onChange={(e) => { setNewPassCon(e.target.value) }}  placeholder="confirm" id='new_pass_field' name='new_pass_field' className='dynamicInputRecover' type="text" title='enter yours pass)' required />
               <label htmlFor="new_pass_field" className="dynamicLabelRecover">Password</label>
            </div>

            <div onClick={()=>{change_pass()}} className="button_container_recover">
               <button className="login_btn_recover">Confirm</button>
               <button className="login_btn_recover_hover">Confirm</button>
            </div>
         </div>

      </div>
   )
}