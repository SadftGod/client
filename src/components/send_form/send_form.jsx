import React from "react";
import './dist/send_form.css'

export default class SendForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         name: '',
         email: '',
         company: '',
         phone: '',
         message: ''
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

               <div className="button_container_send">
                  <button className="send_contact_form_hover">Send</button>
                  <button className="send_contact_form">Send</button>
               </div>
            </div>
            <div className="map_con">
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d84736.52543485665!2d29.363457314976472!3d48.417829080938226!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cda35fdb2775af%3A0x441d91c06f0d93aa!2z0JHQsNC70LDQvdC-0LLQutCwLCDQktC40L3QvdC40YbQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDI0NDEz!5e0!3m2!1sru!2sua!4v1709903860704!5m2!1sru!2sua"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  title="googleMap" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
         </div>
      )
   }
}