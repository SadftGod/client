import React, { useState, useEffect, useCallback } from 'react';
import './dist/faf.css'

function FactsAndFeatures() {
   const [yellowPos, setYellowPos] = useState(1)
   const [title, setTitle] = useState("FAMILY BUSINESS FOR THREE DECADES")
   const [description, setDescription] = useState("Established in 1994 by Nazarenko Victor Ivanovych in Balanivka, our family-owned grain company has blossomed under the leadership of Nina and Bogdan Nazarenko. With a commitment to expansion and excellence, we now offer a wide range of top-quality grain products and agricultural services. Our success is founded on enduring partnerships forged over three decades of dedicated commercial activity.")



   const yellow_swiper = useCallback(() => {
      const yellow_block = document.querySelector(".yellow_hover")
      const faf_img_con1 = document.querySelector("#faf_img_con1")
      const faf_img_con2 = document.querySelector("#faf_img_con2")
      const faf_img_con3 = document.querySelector("#faf_img_con3")
      const faf_img_con4 = document.querySelector("#faf_img_con4")

      if (yellowPos === 1) {
         yellow_block.style.left = "7.2%"
         yellow_block.style.width = "18%"
         faf_img_con1.style.width = "100%"
         faf_img_con2.style.width = "0"
         faf_img_con3.style.width = "0"
         faf_img_con4.style.width = "0"
         setTitle("FAMILY BUSINESS FOR THREE DECADES")
         setDescription("Established in 1994 by Nazarenko Victor Ivanovych in Balanivka, our family-owned grain company has blossomed under the leadership of Nina and Bogdan Nazarenko. With a commitment to expansion and excellence, we now offer a wide range of top-quality grain products and agricultural services. Our success is founded on enduring partnerships forged over three decades of dedicated commercial activity.")

      } else if (yellowPos === 2) {
         yellow_block.style.left = "29.5%"
         yellow_block.style.width = "17%"
         faf_img_con1.style.width = "0"
         faf_img_con2.style.width = "100%"
         faf_img_con3.style.width = "0"
         faf_img_con4.style.width = "0"
         setTitle("Our offer")
         setDescription("We specialize in growing five types of grains – wheat, barley, sunflower, soy, and corn – to meet our customers' different needs. Our farm is dedicated to sustainability, quality, and ensuring customer satisfaction in all our endeavors. Explore our selection of grains. ")
      } else if (yellowPos === 3) {
         yellow_block.style.left = "53.3%"
         yellow_block.style.width = "15%"
         faf_img_con1.style.width = "0"
         faf_img_con2.style.width = "0"
         faf_img_con3.style.width = "100%"
         faf_img_con4.style.width = "0"
         setTitle(<div>Verified quality:<br/></div> )
         setDescription("We are convinced that certification is the effective tool in our industry, enabling successful and fair economic activity. Therefore, we are adjusting our business to meet quality criteria. This ensures that we meet industry standards and deliver products to our valued customers.")
      } else if (yellowPos === 4) {
         yellow_block.style.width = "19%"
         yellow_block.style.left = "71%"
         faf_img_con1.style.width = "0"
         faf_img_con2.style.width = "0"
         faf_img_con3.style.width = "0"
         faf_img_con4.style.width = "100%"
         setTitle(<div>Our company places great emphasis on preserving nature and  <br/>  Dolyna-N - your trusted source <br/>  for high-quality seeds.</div>)
         setDescription(<div>At Dolyna-N, our mission is to provide our customers, partners, <br/>  and stakeholders with the best seeds available. With a commitment<br/>  to quality and sustainability, we aim to be <br/> the go-to platform for all your seed needs.</div>)
      }
   },[yellowPos]) 

   useEffect(() => {
      yellow_swiper()
   }, [yellowPos,yellow_swiper]);

   return (
      <div className="faf_con">
         <div className="faf_title">FACTS & FIGURES</div>
         <div className="faf_swiper">
            <div className="yellow_hover"></div>
            <div className="swiper_content">
               <div onClick={() => {
                  setYellowPos(1)
               }} className="swiper_content_text">Founding year<br /> 1994</div>
               <div onClick={() => {
                  setYellowPos(2)
               }} className="swiper_content_text">Product types <br /> 5</div>
               <div onClick={() => {
                  setYellowPos(3)
               }} className="swiper_content_text">Certification</div>
               <div onClick={() => {
                  setYellowPos(4)
               }} className="swiper_content_text">Tones of output <br /> 1000</div>


            </div>
         </div>
         <div className="faf_content">
            <div className="faf_text">
               <div className="faf_text_title">{title}</div>
               <div className="faf_text_description">{description}</div>
            </div>
            <div className="faf_img_swiper">
               <div id='faf_img_con1' className="faf_img_con">
                  <img className="faf_img" src={process.env.PUBLIC_URL + '/img/facts/first.png'} alt="" />
               </div>
               <div id='faf_img_con2' className="faf_img_con">
                  <img className="faf_img" src={process.env.PUBLIC_URL + '/img/facts/second.png'} alt="" />
               </div>
               <div id='faf_img_con3' className="faf_img_con">
                  <img className="faf_img" src={process.env.PUBLIC_URL + '/img/facts/third.png'} alt="" />
               </div>
               <div id='faf_img_con4' className="faf_img_con">
                  <img className="faf_img" src={process.env.PUBLIC_URL + '/img/facts/forth.png'} alt="" />
               </div>
               

            </div>
            <div id='ys1' className="yellow_square"></div>
            <div id='ys2' className="yellow_square"></div>
         </div>



      </div>
   )
}

export default FactsAndFeatures