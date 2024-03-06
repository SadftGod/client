import React from "react";
import './dist/passwordreset.css'
import BlackBlock from "../blackBlock/blackBlock";

export default class ResetPassword extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
        email:''
      }
   }
  

   render(){
      return (
         <div className="reset_password_con">
         <div className="reset_modal">
            <div className="reset_sizer">
               <div className="reset_forgot">Forgot your password?</div>
               <div className="reset_fields_con">
                  <input placeholder="Email" id='reset_field' name='reset_field' className='dynamicInputreset' type="text" required />
                  <label htmlFor="reset_field" className="dynamicLabelreset">Email</label>
               </div>
               <div className="reset_button_con">
                  <button onClick={()=>{this.props.ResetPasswords()}} className="reset_btn_text reset_btn_close">Close</button>
                  <button className="reset_btn_text reset_btn_send">Send</button>
               </div>

            </div>
         </div>
         <BlackBlock ResetPasswords = {this.props.ResetPasswords}/>
         </div>
      )
   }
}