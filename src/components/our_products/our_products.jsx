import React from "react";
import './dist/our_products.css'
import { useNavigate } from "react-router-dom";


export default function OurProducts(){
   const navigate = useNavigate();

   const nav = (name) => {
      navigate(name);
    };

   return(
      <div className="OurProdBlock">
         <div className="Our_prod_Title">Our products</div>
         <div className="Our_prod_Description">At Dolyna-N, our mission is to provide our customers, partners, <br/>and stakeholders with the best grain available. With a commitment<br/>to quality and sustainability, we aim to be <br/>the go-to platform for your grain needs.</div>
         <button onClick={()=>{nav("/products")}} className="nav_to_prod"> TO OUR PRODUCTS</button>
      </div>
   )
}