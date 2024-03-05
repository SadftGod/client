import React,{useState} from 'react';
import './dist/header.css';


export default function Header(){
   const [language,setLanguage] = useState('EN')

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

   return (
      <div className="header_con">
         <div className="header">
            <div className="logo_con">
               <img className="logo" src={process.env.PUBLIC_URL + '/img/big_logo.svg'} alt="sd" />
            </div>
            <nav className="nav">
               <div className="nav_element">About us</div>
               <div className="nav_element">Products</div>
               <div className="nav_element">Contacts</div>
               <div className="nav_element">My account</div>
               <div onClick={()=>{changeLanguage()}} className="nav_element"><span id="UAlanguage" style={{transition:'0.2s' }}>UA</span>|<span id="ENlanguage" style={{ color: '#FFB75E', transition:'0.2s' }}>EN</span></div>
            </nav>
         </div>
         <div className="line"></div>
      </div>
    );
}