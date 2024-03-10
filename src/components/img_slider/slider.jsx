import React from "react";
import './dist/slider.css'

export default class Slider extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         current_img: 1,
         title: "Dolyna-N: Ukrainian high quality grain supplier",
         description: "Where quality, innovation, and sustainability are our daily business. We establish new benchmarks for products and environmentally conscious practices, always striving for continuous improvement. "
      }
   }

   scroll_by_button = () => {
      let first = document.querySelector('#first_img')
      let second = document.querySelector('#second_img')
      let third = document.querySelector('#third_img')
      if (this.state.current_img === 1) {
         if (second.style.width !== "0") {
            second.style.width = "0"
         }
         if (third.style.width !== "0") {
            third.style.width = "0"
         }
         first.style.width = "33.3%"
         this.setState({ title: "Dolyna-N: Ukrainian high quality grain supplier" })
         this.setState({ description: "Where quality, innovation, and sustainability are our daily business. We establish new benchmarks for products and environmentally conscious practices, always striving for continuous improvement. " })

      }
      if (this.state.current_img === 2) {
         if (first.style.width !== "0") {
            first.style.width = "0"
         }
         if (third.style.width !== "0") {
            third.style.width = "0"
         }
         second.style.width = "33.3%"
         this.setState({ title: "Our Roots, Our Land" })
         this.setState({ description: "As second-generation farmers, safeguarding our nature and traditions is our paramount commitment. Through sustainable practices and cutting-edge technology, we passionately advocate for the preservation of our environment, driven by our profound love for our land and its heritage. " })
      }
      if (this.state.current_img === 3) {
         if (first.style.width !== "0") {
            first.style.width = "0"
         }
         if (second.style.width !== "0") {
            second.style.width = "0"
         }
         third.style.width = "33.3%"
         this.setState({ title: "Since 1994, our products have shaped the Vinnytsia region" })
         this.setState({ description: "As seasoned experts in the industry and with a relentless pursuit of improvement, our agricultural products epitomize outstanding quality and sustainable cultivation. For three decades, we have continuously raised our standards to meet your needs" })
      }
   }

   componentDidMount(){
      this.interval = setInterval(() => {
         if(this.state.current_img === 1){
            this.setState({current_img:2},()=>{
               this.scroll_by_button()
            })
         }else if(this.state.current_img === 2){
            this.setState({current_img:3},()=>{
               this.scroll_by_button()
            })
         }else if(this.state.current_img === 3){
            this.setState({current_img:1},()=>{
               this.scroll_by_button()
            })
         }
       }, 5000);
   }
   
   componentWillUnmount() {
      clearInterval(this.interval); 
    }

   aboutUs = () =>{
         const element = document.querySelector('.faf_con');
         if(element){
            element.scrollIntoView({ behavior: 'smooth' });
         } 
   }

   render() {
      return (
         <div className="img_slider">
            <div className="imgs_con">
               <div id="first_img" className="img_con">
                  <div className="title title1">{this.state.title}</div>
                  <div className="description description1">{this.state.description}</div>
                  <img className="img_con_img" src={process.env.PUBLIC_URL + '/img/slider/first_slider.png'} alt="" />
               </div>
               <div id="second_img" className="img_con">
                  <div className="title title2">{this.state.title}</div>
                  <div className="description description2">{this.state.description}</div>
                  <img className="img_con_img" src={process.env.PUBLIC_URL + '/img/slider/second_slider.png'} alt="" />
               </div>
               <div id="third_img" className="img_con">
                  <div className="title title3">{this.state.title}</div>
                  <div className="description description3">{this.state.description}</div>
                  <img className="img_con_img" src={process.env.PUBLIC_URL + '/img/slider/third_slider.png'} alt="" />
               </div>

            </div>


            <div className="btn_bar_con">
               <div className="btn_bar">
                  <div className="scroll_bottom">
                     <img onClick={()=>{this.aboutUs()}} src={process.env.PUBLIC_URL + '/img/scroll_down.svg'} alt="" />
                  </div>
                  <div className="scroll_imgs">
                     <div onClick={() => {
                        this.setState({ current_img: 1 }, () => {
                           this.scroll_by_button()
                        })
                     }} className={this.state.current_img === 1 ? "scroll_menu active" : "scroll_menu"}></div>
                     <div onClick={() => {
                        this.setState({ current_img: 2 }, () => {
                           this.scroll_by_button()
                        })
                     }} className={this.state.current_img === 2 ? "scroll_menu active" : "scroll_menu"}></div>
                     <div onClick={() => {
                        this.setState({ current_img: 3 }, () => {
                           this.scroll_by_button()
                        })
                     }} className={this.state.current_img === 3 ? "scroll_menu active" : "scroll_menu"}></div>
                     <div className="connect_to_sap">
                        <img src={process.env.PUBLIC_URL + '/img/call.svg'} alt="" />
                     </div>

                  </div>
               </div>

            </div>

            <div className="black_block"></div>
         </div>
      )
   }
}