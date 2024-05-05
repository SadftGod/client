import React, { useEffect ,useState , useRef } from "react";

import './dist/chat.css';


export default function ChatAI({chat , open_chat}) {
   
   const [scrollY, setScrollY] = useState(0);

   const scroll_controller = useRef(null) 

   const documentScroll = () => {
     setScrollY(window.scrollY);
   };
 
   useEffect(() => {
      scroll_controller.current = 0
     window.addEventListener('scroll', documentScroll);
     return () => {
       window.removeEventListener('scroll', documentScroll);
     };
   }, []);

   useEffect(()=>{
      if(scrollY > 13){
         if(scroll_controller.current === 0){
            scroll_controller.current = 1
            let chatBox = document.querySelector('.chatAI-box')
            chatBox.style.top = '0.5vh'
            chatBox.style.height = '99vh'
         }
      }else{
         scroll_controller.current = 0
         let chatBox = document.querySelector('.chatAI-box')
         chatBox.style.top = '11.5vh'
         chatBox.style.height = '87.46vh'

      }
   },[scrollY])





   useEffect(()=>{
      let chatBox = document.querySelector('.chatAI-box')
      if(chat === 1){
         chatBox.style.width = '39.44vw'
         chatBox.style.padding = '0 13px '
      }else{
         chatBox.style.width = '0'
         chatBox.style.padding = '0'
      }
   },[chat])
   return (
      <div className="chatAI-box">
         <header className="chatAI-header">
            <div className="chatAI-title">
               Dolyna-n Bot
            </div>
            <div onClick={()=>open_chat()} className="chatAI-arrow-back">
               <div className="chatAI-arrow"></div>
            </div>
         </header>

         <div  className="chatAI-background">
            <img src={process.env.PUBLIC_URL + '/img/big_logo.png'} alt="" />
         </div>
      </div>
   )
}