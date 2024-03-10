import React from 'react'
import './dist/products.css'
import products_data from '../../products.json'
import ProductCard from '../../components/product_card/product_card'

export default class Products extends React.Component {
constructor(props) {
   super(props)
   this.state = {
      products_data: products_data.data
   }
}
   render() { 
      return (
      <div className="products_con">
         <header className="products_title">
            Cereals
         </header>
         <main className="products_list">
            {this.state.products_data.map((product,index)=>
               <ProductCard key={index} index={index} product={product} />
            )}
         </main>
         <div className="product_margin"></div>
      </div>
   )}
}