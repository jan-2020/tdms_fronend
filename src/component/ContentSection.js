import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Heading from './Heading';
import SearchPaging from './SearchPaging'
import SaveButton from './SaveButton';
import AssignPermission from './AssignPermission';


class ContentSection extends Component{
    render(){
         return(
<div class="col-8 section-content">
    <article class="main-article">
        <article class="main-article-inner">
            <Heading/>
            <SearchPaging/>
            <AssignPermission/>
            <SaveButton/>
            

            </article>
            </article>
            </div>
         )
    }
}
export default ContentSection;
