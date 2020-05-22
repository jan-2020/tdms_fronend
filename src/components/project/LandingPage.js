import React, {Component} from 'react';
import '../../Login.css';
import LandingPageHeader from './../layout/LandingPageHeader';

class LandingPage extends Component {
    render(){
        return(
            
          <div className="global-container">
           <LandingPageHeader/>
            </div>
        )
    }
}

export default LandingPage;