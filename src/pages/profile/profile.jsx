import React from 'react';
import './dist/profile.css';
import AccountHeader from '../../components/accountHeader/acountheader';
import Overview from '../../components/accountoverview/acc_overview';
import AccData from '../../components/acc_data/acc_data';
import { jwtDecode } from "jwt-decode";

export default class Profile extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         account_data: undefined,
      }
   }

   jwtUncode = () =>{
      const token = document.cookie
      if(token){
         if (token.split("=")[0] === "dolyna-n") {
            const uncoded = jwtDecode(token.split("=")[1]);
            this.setState({account_data: uncoded})
         }
      }
   }

   componentDidMount(){
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
      this.jwtUncode()
   }
   render() { return(
      <main className="profile_con">
         <AccountHeader account_data={this.state.account_data} page_slider={this.page_slider} />
         <section className="profile_main">
            <Overview account_data={this.state.account_data} />
            <AccData account_data={this.state.account_data} />

         </section>
      </main>
   )}
}