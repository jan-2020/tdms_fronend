import React,{Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import CKEditor from  "ckeditor4-react";

const loadScript = require('load-script');

//var defaultScriptUrl ="D:/EDITOR3/test-editor/src/ckeditor/ckeditor.js" ;

class App1 extends Component{
 constructor(props) {
    super(props);

    //Bindings
    this.onLoad = this.onLoad.bind(this);

    //State initialization
    this.state = {
      isScriptLoaded: false
    };
  }

  componentWillReceiveProps(props) {
    const editor = this.editorInstance;
    if (editor && editor.getData() !== props.content) {
      editor.setData(props.content);
    }

    
  }

  componentWillUnmount() {
    this.unmounting = true;
  }

   onLoad() {
    if (this.unmounting) return;

    this.setState({
      isScriptLoaded: true
    });

    if (!window.CKEDITOR) {
      console.error('CKEditor not found');
      return;
    }

    this.editorInstance = window.CKEDITOR.appendTo(
      ReactDOM.findDOMNode(this),
      this.props.config,
      this.props.content
    );

    //Register listener for custom events if any
    for (var event in this.props.events) {
      var eventHandler = this.props.events[event];

      this.editorInstance.on(event, eventHandler);
    }
  }
	render(){
		return (
			<div className="App">
            <div className={this.props.activeClass}/>
			<CKEditor data={this.props.content} />
			
			</div>
		);
	}

}

export default App1;
