import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom';
import SidePanel from './SidePanel';
import ContentSection from './ContentSection';
import Footer from './layout/Footer'




class Dashboard extends Component{
    render(){
        return(
            <div class="wrapper">
  <div id="main-content">
  <div class="row">

    <SidePanel/>
    <ContentSection/>
    <Footer/>

      </div>
</div>
</div>
        )
    }}

export default Dashboard;