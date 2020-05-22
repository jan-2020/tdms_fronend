import React, {Component} from 'react';
import {connect} from "react-redux";

class TraineeDashboard extends Component {
   render()
    {
        const{userLoginDetails}=this.props.userFromCombineReducer

        console.log(this.props.userFromCombineReducer.userLoginDetails)
      
        
        return(
            <div>
             <h1>
            {userLoginDetails.message}
            
           </h1>

            </div>
            
        );
   }
}


const mapStateToProps = state =>({
    errors: state.errors, // lhs errors comes from combine reducer,
    userFromCombineReducer:state.userFromCombineReducer
//    userLoginDetails:state.userFromCombineReducer.userLoginDetails,
//    user:state.userFromCombineReducer.userLoginDetails.user
});
export default connect(mapStateToProps)(TraineeDashboard);