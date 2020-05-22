import React, { Component } from 'react';
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import classnames from "classnames";
import { createPermission } from "../../actions/permissionActions";

class AddPermission extends Component
{
	constructor(props){
		super(props);
		this.state={
        permissionName:"",
		moduleIds:["select","User", "Document","Group","Task"],
		moduleId:""
       }

	   this.onChange1=this.onChange1.bind(this);
	   this.handleDataChange = this.handleDataChange.bind( this );
	   this.handleChange = this.handleChange.bind( this );
	   this.onSubmit=this.onSubmit.bind(this);
	}

	onChange1(event) {
    this.setState({ [event.target.name]: event.target.value });
    }

	 
	 onSubmit(event){
        event.preventDefault();
        const newPermission={
            permissionName:this.state.permissionName,
			moduleId:this.state.moduleId,
        };
        console.log(newPermission);
        this.props.createPermission(newPermission,this.props.history);
	}

	handleDataChange(data){
	    
		this.setState({content:data});
	}


	handleChange( changeEvent ) {
        this.setState( {
            data: changeEvent.target.value
        } );

       
    }
	
	
	render(){
		return (
			<div className="permission">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-4">
						<div className="d-flex">
						
					   </div>
					</div>
					<div className="col-lg-8">
						<div className="d-flex">
							<div className="p-4 align-left">
							<h1 className="display-4 text-center">Create Permission</h1>
							<form onSubmit={this.onSubmit}>
							<h5 className="float-left">Permission Name</h5>
							<div className="form-group">
                                 <input type="text"  className={classnames("form-control form-control-lg")} name="permissionName" onChange={this.onChange1}/> 
							 </div>
							
                             <h5 className="float-left">Module</h5>
							 <div className="form-group">
		
  							
								<select name="moduleId" value={this.state.moduleId} onChange={this.onChange1} className="form-control form-control-lg">
							     {this.state.moduleIds.map(function(module){
									return <option value={module}>{module}</option>
								 })}
                                 
                             </select>
							 </div>

							<input type="submit" className="btn btn-primary btn-block mt-4" />
							</form>
						   </div>	
						</div>
					</div>

					

						</div>
                
					</div>
				</div>

		);
	}
}


AddPermission.propTypes={
    createPermission:PropTypes.func.isRequired
};

export default connect(null,{createPermission})(AddPermission);


