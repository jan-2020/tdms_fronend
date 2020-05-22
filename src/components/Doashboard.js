import React, { Component } from 'react';
import DocumentItem from './DocumentItem';
import CreateButton from './Documents/CreateButton';
import {PropTypes} from "prop-types";
import ListButton from './Documents/ListButton';
import { connect } from "react-redux";
import { getDocuments } from "../actions/DocumentActions";
class Dashboard extends Component {
    componentDidMount(){
        this.props.getDocuments();
    }
    render() {
        const documents=this.props.documents.documents;
        return (
             <div className="documents">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">Trainer Dashboard</h1>
                            <br />
                            <CreateButton/> 
                            <br/>
                            <br/>
                            <ListButton/>
                            <br />
                        

                        </div>
                    </div>
                </div>
            </div>
    );
    }
}
Dashboard.propTypes={
    document:PropTypes.object.isRequired,
    getDocuments:PropTypes.func.isRequired
};
const mapStateToProps=state=>({
    documents:state.documents
});
export default connect(mapStateToProps,{getDocuments})(Dashboard);