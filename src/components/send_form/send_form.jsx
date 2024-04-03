import React from "react";
import './dist/send_form.css'
import form from "../../services/form-services/form.service";

export default class SendForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         name: '',
         email: '',
         company: '',
         phone: '',
         message: '',
         errorMessage: ""
      }
   }

   all_red = () => {

      let nameI = document.getElementById("contact_name")
      let emailI = document.getElementById("contact_email")

      let companyI = document.getElementById("contact_company")
      let phoneI = document.getElementById("contact_phone")

      let messageI = document.getElementById("contact_message")

      nameI.style.borderBottom = 'solid 2px red'
      emailI.style.borderBottom = 'solid 2px red'
      phoneI.style.borderBottom = 'solid 2px red'
      companyI.style.borderBottom = 'solid 2px red'
      messageI.style.borderBottom = 'solid 2px red'

      setTimeout(() => {
         nameI.style.borderBottom = 'solid 2px #D9D9D9'
         emailI.style.borderBottom = 'solid 2px #D9D9D9'
         phoneI.style.borderBottom = 'solid 2px #D9D9D9'
         companyI.style.borderBottom = 'solid 2px #D9D9D9'
         messageI.style.borderBottom = 'solid 2px #D9D9D9'
         this.setState({ errorMessage: "" })

      }, 4000);

   }
   send_form = async (name, email, company, phone, message) => {
      if (name !== '' && email !== '' && company !== '' && phone !== '' && message !== '') {
         if (name.length > 1) {
            if (email.includes('@')) {
               if (/[0-9]+/.test(phone)) {
                  const response = await form.contactUs(name, email, company, phone, message)
                  this.setState({ name: '', email: '', company: '', phone: '', message: '' })
                  return response
               } else {
                  this.setState({ errorMessage: "Remove letters from number" })


                  this.all_red()

               }
            } else {
               this.setState({ errorMessage: "Email must have @" })
               this.all_red()

            }

         } else {
            this.setState({ errorMessage: "Name is too short" })
            this.all_red()

         }

      } else {
         this.setState({ errorMessage: "data can not be empty" })
         this.all_red()
      }
   }

   render() {
      return (
         <div className="send_form_con">
            <div className="send_form">
               <div className="send_form_title"><div>Contact us</div> </div>
               <div className="send_form_first_row">
                  <div className="contact_fields_con">
                     <input value={this.state.name} onChange={
                        (e) => {
                           this.setState({ name: e.target.value })
                        }} placeholder="Name" id='contact_name' name='contact_name' className='dynamicInputLittle' type="text" required />
                     <label htmlFor="contact_name" className="dynamicLabelLittle">Name*</label>
                  </div>
                  <div className="contact_fields_con">
                     <input value={this.state.email} onChange={
                        (e) => {
                           this.setState({ email: e.target.value })
                        }} placeholder="Email" id='contact_email' name='contact_email' className='dynamicInputLittle' type="email" required />
                     <label htmlFor="contact_email" className="dynamicLabelLittle">E-mail*</label>
                  </div>

               </div>
               <div className="send_form_first_row ">
                  <div className="contact_fields_con">
                     <input value={this.state.company} onChange={
                        (e) => {
                           this.setState({ company: e.target.value })
                        }} placeholder="Company" id='contact_company' name='contact_company' className='dynamicInputLittle' type="text" required />
                     <label htmlFor="contact_company" className="dynamicLabelLittle">Company</label>
                  </div>
                  <div className="contact_fields_con">
                     <input value={this.state.phone} onChange={
                        (e) => {
                           this.setState({ phone: e.target.value })
                        }} placeholder="Number" id='contact_phone' name='contact_phone' className='dynamicInputLittle' type="number" required />
                     <label htmlFor="contact_phone" className="dynamicLabelLittle">Phone Nubmer</label>
                  </div>

               </div>
               <div className="contact_fields_con_full">
                  <input value={this.state.message} onChange={
                     (e) => {
                        this.setState({ message: e.target.value })
                     }} placeholder="Message" id='contact_message' name='contact_message' className='dynamicInputBig' type="text" required />
                  <label htmlFor="contact_message" className="dynamicLabelBig">Message*</label>
               </div>
               <div className="error_message_send_form">{this.state.errorMessage}</div>


               <div onClick={() => { this.send_form(this.state.name, this.state.email, this.state.company, this.state.phone, this.state.message) }} className="button_container_send">
                  <button className="send_contact_form_hover">Send</button>
                  <button className="send_contact_form">Send</button>
               </div>
            </div>
            <div className="map_con">
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d84736.52543485665!2d29.363457314976472!3d48.417829080938226!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cda35fdb2775af%3A0x441d91c06f0d93aa!2z0JHQsNC70LDQvdC-0LLQutCwLCDQktC40L3QvdC40YbQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDI0NDEz!5e0!3m2!1sua!2sen!4v1709903860704!5m2!1sua!2sen"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  title="googleMap" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

         </div>
      )
   }
}