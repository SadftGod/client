import React, { useEffect, useState } from "react";
import './dist/acc_data.css'
import users from "../../services/user_services/user.service";

export default function AccData(props) {
   const [acc_data, setAccData] = useState(undefined)
   const [fname, setFirstName] = useState("")
   const [lname, setLastName] = useState("")
   const [cname, setCompanyName] = useState("")
   const [phone, setPhone] = useState("")


   const update_user = async(name, surname, phone, company_name, email)=>{
      const response = await users.update_user(name, surname, phone, company_name, email)
      props.setPrevToken(document.cookie.split("=")[1])
      document.cookie ="dolyna-n=" + response.data.token
   }
   const post_update = ()=>{
      update_user(fname, lname, phone, cname, props.email)
   }

   useEffect(() => {
      if (props.account_data) {
         setAccData(props.account_data)
      }
   }, [props.account_data]);

   useEffect(() => {
      if (acc_data) {
         setFirstName(acc_data.name)
         setLastName(acc_data.surname)
         setCompanyName(acc_data.company_name)
         setPhone(acc_data.phone)
      }
   }, [acc_data])

   return (
      <div className="acc_data">
         <header className="personal_data"> Personal Data </header>
         <main className="change_data_form">

            <div className="acc_data_fields_con">
               <input value={fname} onChange={(e) => { setFirstName(e.target.value) }} placeholder="Email" id='first_name_field' name='first_name_field' className='dynamicInputacc_data' type="text" required />
               <label htmlFor="first_name_field" className="dynamicLabeldata">First name</label>
            </div>
            <div className="acc_data_fields_con register_fields">
               <input value={lname} onChange={(e) => { setLastName(e.target.value) }} placeholder="Email" id='last_name_field' name='last_name_field' className='dynamicInputacc_data' type="text" required />
               <label htmlFor="last_name_field" className="dynamicLabeldata">Last name</label>
            </div>
            <div className="acc_data_fields_con register_fields">
               <input value={phone} onChange={(e) => { setPhone(e.target.value) }} placeholder="Email" id='acc_phone_field' name='acc_phone_field' className='dynamicInputacc_data' type="text" required />
               <label htmlFor="acc_phone_field" className="dynamicLabeldata">Phone number</label>
            </div>
            <div className="acc_data_fields_con register_fields">
               <input value={cname} onChange={(e) => { setCompanyName(e.target.value) }} placeholder="Email" id='company_name_acc_field' name='company_name_acc_field' className='dynamicInputacc_data' type="text" required />
               <label htmlFor="company_name_acc_field" className="dynamicLabeldata">Company name</label>
            </div>

            <div className="acc_data_btn_con">
               <button className="acc_data_btn acc_data_cancel">Cancel</button>
               <button onClick={()=>{post_update()}} className="acc_data_btn acc_data_save">Save</button>
            </div>
         </main>
      </div>
   )
}