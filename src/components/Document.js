import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

class Document extends Component {

    // constructor(props){
    //     super(props)

    //     this.state={
    //         text:''
    //     }
    // }

setContent = (proxy) => {
    const {file, saveFile} = this.props;
    
    const content = proxy.currentTarget.value;

const updatedFile = {...file, content};

    saveFile(updatedFile);
}
//1. Add varialbe to this.state; 
//2. Set textarea.value to be that variable; 
//3. set that variable each time the user enters text

render(){


    const styles = {
        textarea: {
            width: '700px',
            height: '600px',

        }
    }
    const {file} = this.props;
    const {content, filename} = file;
    const numberOfLines = [...content].filter(c=> c==='\n').length +1;


        return (
            <div>
                <p>
                 Document: {filename}
                 </p>
                 <div>
                 <textarea style={styles.textarea} onChange={this.setContent} value={content}/>
                 <p>
                     {`Number of characters: ${content.length}` }
                 </p>
                 <p>
                     {`Number of lines: ${numberOfLines}`}
                 </p>
                 </div>
            </div>
        )
    }
}
Document.propTypes = {
    file: PropTypes.object.isRequired,
    saveFile: PropTypes.func.isRequired,
};

export default Document

