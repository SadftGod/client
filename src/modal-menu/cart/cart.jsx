import React from "react";
import './dist/cart.css';
import BlackBlock from "../blackBlock/blackBlock";
import SuccessCartAdd from "../successAdded/cartSuccess";


export default function Cart(props) {

   return (
      <section className="cart_con">
         <div className="cart">
            <header className="cart_title">
               {props.cartData.length > 0 ? `${props.cartData.length} Selected Product${props.cartData.length > 1 ? "s" : ""}` : "Cart is empty"}
            </header>
            <main className="cart_points">
               {props.cartData.map(e => (
                  <div key={e.id} className="cart_element">
                     <div className="cart_element_description">
                        <div className="cart_element_title">
                           {e.title}
                        </div>
                        <div className="cart_element_img_con">
                           <img className="cart_element_img" src={e.image} alt="" />
                        </div>
                     </div>
                     <div className="cart_element_quantity">
                        <div className="cart_element_quantity_text">
                           Quantity: {e.quantity}kg
                        </div>
                     </div>

                  <button onClick={()=>{props.delete_from_cart(e.id)}} className="delete_from_cart">
                     <img src={process.env.PUBLIC_URL + '/img/cart/cancel.svg'} alt="" />
                  </button>
                  </div>
               ))}
            </main>

            <footer className="total_section_con">
               <div className="total_section">
                  Kilos in total:{props.cartData.reduce((sum, item) => sum + parseFloat(item.quantity), 0)} kg
               </div>
               {props.cartData.length > 0 ?<div className="requestQuote_con">
                  <button className="requestQuote">Request a quote</button>
               </div>:""}
               
            </footer>

         <SuccessCartAdd/>
         </div>
         <BlackBlock cart_visible={props.cart_visible} />
      </section>
   )
}