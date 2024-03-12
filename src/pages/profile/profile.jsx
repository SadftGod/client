import React from 'react';
import './dist/profile.css';
import AccountHeader from '../../components/accountHeader/acountheader';
import Overview from '../../components/accountoverview/acc_overview';
import AccData from '../../components/acc_data/acc_data';

export default class Profile extends React.Component {

   componentDidMount(){
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
   }
   render() { return(
      <main className="profile_con">
         <AccountHeader page_slider={this.page_slider} />
         <section className="profile_main">
            <Overview />
            <AccData />

         </section>
      </main>
   )}
}