import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Heading from './Heading';


class SearchPaging extends Component{
    render(){
         return(

<div class="article-meta">
<div class="row">
                 <div class="input-group">
                   
                    <input class="form-control icon-search-box py-2 
                    border-left-1 border" type="search" placeholder="Search" id="search-input"/>   &nbsp; &nbsp;  
                </div>
            </div>
</div>
         )
    }
}
export default SearchPaging;