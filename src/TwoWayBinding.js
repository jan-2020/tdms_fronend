import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CKEditor from 'ckeditor4-react';

//const innerHtml = { __html: props.someProps.greeting }
  //return <p dangerouslySetInnerHtml={innerHtml}></p>
class TwoWayBinding extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            data: '<p>React is really <em>nice</em>!</p>'
        };

        this.handleChange = this.handleChange.bind( this );
        this.onEditorChange = this.onEditorChange.bind( this );
        
    }

    
    onEditorChange( evt ) {
        this.setState( {
            data: evt.editor.getData()
        } );
        
        
    }

    

    handleChange( changeEvent ) {
        this.setState( {
            data: changeEvent.target.value
        } );

       
    }

    render() {
        return (
            <div>
                <CKEditor
                    data={this.props.contentMethod}
                    onChange={this.onEditorChange} />
                    <label>
                        
                    </label>
                    <EditorPreview data={this.state.data} />
                    {this.sendContent}
            </div>
        );
    }
}

class EditorPreview extends Component {
    render() {
        const editorD={ __html: this.props.data };
        return (
            <div className="editor-preview">
                
            </div>
        );
    }
}

EditorPreview.defaultProps = {
    data: ''
};

EditorPreview.propTypes = {
    data: PropTypes.string
};

export default TwoWayBinding;