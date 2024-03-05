import React from 'react';
import './dist/footer.css'

export default function Footer() {


   return (
      <div className="footer_block">
         <div className="footer_con">
            <div className="footer_top">
               <div className="short_logo_con">
                  <img className="short_logo" src={process.env.PUBLIC_URL + '/img/short_logo.svg'} alt="" />
               </div>
               <div className="location_con">
                  <div className="location"><div>Location:</div>
                     <div>24413, v. Balanivka</div>
                  </div>
                  <div className="contact">
                     <div>Contact:</div>
                     <div> +380123456789</div>
                     <div>------------@gmail.com</div>
                  </div>
               </div>
               <div className="footer_navigator">
                  <div className="footer_navigator_e">Our mission</div>
                  <div className="footer_navigator_e">Our products</div>
                  <div className="footer_navigator_e">Contact us</div>
               </div>
               <div className="footer_contactus">
                  <div className="footer_contactus_title">Follow us:</div>
                  <div className="media_net">
                     <img className="links_img" src={process.env.PUBLIC_URL + '/img/links/inst.svg'} alt="" />
                     <img className="links_img" src={process.env.PUBLIC_URL + '/img/links/facebook.svg'} alt="" />
                     <img className="links_img" src={process.env.PUBLIC_URL + '/img/links/linkedin.svg'} alt="" />
                  </div>
               </div>
            </div>
         </div>
         <div className="footer_line">

         </div>
         <div className="footer_bottom">
             <div>© 2024 Dolyna-N. All rights reserved.</div>
             <div>Cookies Policy</div>
         </div>
      </div>
   )
}
