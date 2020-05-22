import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom';
import SidePanel from './SidePanel';


class CardFormModule extends Component{
    render(){
        return(
            <div class="wrapper">
  <div id="main-content">
  <div class="row">
  <SidePanel/>

      </div>
</div>
</div>
        )
    }}

export default CardFormModule;