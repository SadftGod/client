import React, { useState, useEffect } from "react";
import './dist/accountheader.css'
import { useCallback } from "react";
import { useNavigate  } from "react-router-dom";


export default function AccountHeader() {
   const [slider_pos, setSlider] = useState("acc_data")
   const navigate = useNavigate();

   const nav = (name) => {
      navigate(name);
    };

   const slide = useCallback(() => {
      let slider = document.querySelector(".header_line_slider")
      let acc_data = document.querySelector(".acc_data")
      let overview = document.querySelector(".acc_overview")
      if (slider_pos !== "acc_data") {
         slider.style.left = "8.4vw"
         slider.style.width = "7.4vw"
         overview.style.width = "0"
         acc_data.style.width = "100%"
         acc_data.style.height = "102.734375vh"
         overview.style.height = "102.734375vh"

      } else {
         slider.style.width = "5vw"
         slider.style.left = "0"
         acc_data.style.width = "0"
         overview.style.width = "100%"
         overview.style.height = "53.3203125vh"
         acc_data.style.height = "53.3203125vh"
        
      }
   }, [slider_pos])

   const logout = ()=>{
      nav("/authorization")
   }

   useEffect(() => {
      slide()
   }, [slider_pos, slide]);


   return (
      <header className="accountheader">
         <div className="accountheader_title">My account</div>
         <div className="header_slider_menu">
            <div className="slider_menu_con">
               <div onClick={() => { setSlider("acc_data"); }} className="header_point">Overview</div>
               <div onClick={() => { setSlider("overview") }} className="header_point">Account Data</div>
               <div className="header_line_slider"></div>
            </div>
            <div onClick={() => { logout()}}className="log_out_btn">Logout</div>

         </div>
      </header>
   )
}