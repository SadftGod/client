import React,{useState} from 'react';
import './dist/header.css';
import { useNavigate } from "react-router-dom";


export default function Header(){
   const [language,setLanguage] = useState('EN')

   const navigate = useNavigate();

   const nav = (name) => {
      navigate(name);
    };

   const changeLanguage = ()=>{
      if(language !== "EN"){
         document.querySelector("#UAlanguage").style.color = 'black'
         document.querySelector("#ENlanguage").style.color = '#FFB75E'
         setLanguage("EN")
      }else{
         document.querySelector("#ENlanguage").style.color = 'black'
         document.querySelector("#UAlanguage").style.color = '#FFB75E'
         setLanguage("UA")
      }
   }

   const aboutUs = () =>{
      if(window.location.pathname !== '/main'){
         nav('/main')
      }

      setTimeout(() => {
         const element = document.querySelector('.faf_con');
         if(element){
            element.scrollIntoView({ behavior: 'smooth' });
         } 
       }, 500);
   }

   const ContactUs = () =>{
      if(window.location.pathname !== '/main'){
         nav('/main')
      }

      setTimeout(() => {
         const element = document.querySelector('.send_form_con');
         if(element){
            element.scrollIntoView({ behavior: 'smooth' });
         } 
       }, 500);
   }

   return (
      <div className="header_con">
         <div className="header">
            <div className="logo_con">
               <img className="logo" src={process.env.PUBLIC_URL + '/img/big_logo.svg'} alt="sd" />
            </div>
            <nav className="nav">
               <div onClick={()=>{aboutUs()}} className="nav_element">About us</div>
               <div onClick={()=>{nav('/products')}} className="nav_element">Products</div>
               <div onClick={()=>{ContactUs()}} className="nav_element">Contacts</div>
               <div className="nav_element">My account</div>
               <div onClick={()=>{changeLanguage()}} className="nav_element"><span id="UAlanguage" style={{transition:'0.2s' }}>UA</span>|<span id="ENlanguage" style={{ color: '#FFB75E', transition:'0.2s' }}>EN</span></div>
            </nav>
         </div>
         <div className="line"></div>
      </div>
    );
}