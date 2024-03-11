import React from "react";
import './dist/acc_data.css'

export default function AccData() {
   return (
      <div className="acc_data">
         <header className="personal_data"> Personal Data </header>
         <main className="change_data_form">

            <div className="acc_data_fields_con">
               <input placeholder="Email" id='first_name_field' name='first_name_field' className='dynamicInputacc_data' type="text" required />
               <label htmlFor="first_name_field" className="dynamicLabeldata">First name</label>
            </div>
            <div className="acc_data_fields_con register_fields">
               <input placeholder="Email" id='last_name_field' name='last_name_field' className='dynamicInputacc_data' type="text" required />
               <label htmlFor="last_name_field" className="dynamicLabeldata">Last name</label>
            </div>
            <div className="acc_data_fields_con register_fields">
               <input placeholder="Email" id='acc_phone_field' name='acc_phone_field' className='dynamicInputacc_data' type="text" required />
               <label htmlFor="acc_phone_field" className="dynamicLabeldata">Phone number</label>
            </div>
            <div className="acc_data_fields_con register_fields">
               <input placeholder="Email" id='company_name_acc_field' name='company_name_acc_field' className='dynamicInputacc_data' type="text" required />
               <label htmlFor="company_name_acc_field" className="dynamicLabeldata">Company name</label>
            </div>

            <div className="acc_data_btn_con">
               <button className="acc_data_btn acc_data_cancel">Cancel</button>
               <button className="acc_data_btn acc_data_save">Save</button>
            </div>
         </main>
      </div>
   )
}