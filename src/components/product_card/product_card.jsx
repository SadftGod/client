import React from "react";
import './dist/product_card.css'

import { useNavigate } from "react-router-dom";


export default function ProductCard(props) {

   const navigate = useNavigate();

   const nav = (name) => {
      navigate(name);
    };
 

   return (
      <div className={`product-card ${props.index % 2 === 0 ? "cardStyle1" : "cardStyle2"}`}>
         <div className="card_img_container">
            <img className="product-card_img" src={props.product.imageUrl} alt="product img" />
         </div> 
         <div className="card_text_con">
            <div className="card_title">
               “{props.product.name}”
            </div>
            <div className="card_description">
               {props.product.description}
            </div>
            <div  onClick={()=>nav(`/products/${props.product.id}`)} className="card_button_request">
               REQUEST
            </div>
         </div>
      </div>
   )
}