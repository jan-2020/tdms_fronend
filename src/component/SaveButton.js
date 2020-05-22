import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Heading from './Heading';
import SearchPaging from './SearchPaging'
import {Link} from 'react-router-dom';



class SaveButton extends Component{
    render(){

return (
    <div id="saveButton">        
    <Link to ="/addProject" className="btn btn-md btn-info">
Save Changes    </Link>
    </div>  
      )
}
}
export default SaveButton;