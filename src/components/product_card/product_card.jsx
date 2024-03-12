import React from "react";
import './dist/product_card.css'

import { useNavigate } from "react-router-dom";


export default function ProductCard(props) {

   const navigate = useNavigate();

   const nav = (name) => {
      navigate(name);
    };
 
   return (
      <div onClick={()=>nav(`/products/${props.product.id}`)} className={`product-card ${props.index % 2 === 0 ? "cardStyle1" : "cardStyle2"}`}>
         <div className="card_img_container">
            <img className="product-card_img" src={props.product.image} alt="" />
         </div> 
         <div className="card_text_con">
            <div className="card_title">
               “{props.product.title}”
            </div>
            <div className="card_description">
               {props.product.description}
            </div>
            <div className="card_button_request">
               REQUEST
            </div>
         </div>
      </div>
   )
}