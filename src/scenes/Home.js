import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import Document from '../components/Document';
import FileListItem from '../components/FileListItem';

class Home extends Component {
    constructor(props){
        super(props)

        this.state={
            newFilename:''
        }
    }

    setFilename = (proxy) => {
        this.setState({newFilename: proxy.currentTarget.value})
    }

    render(){
        const styles = {
            button: {
                display: 'inline-block',
                marginLeft: '10px',
                backgroundColor: '#e74c3c',
                padding: '6px',
                borderRadius: '7px',
                color: 'white',
                
            },
            
            filesContainer: {
                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.4)',
                flex:1, 
                minHeight: '500px',
                margin: 20,
            },
            flexContainer: {
                display: 'flex',
            },
            lowOpacity: {
                opacity: 0.3,
            },
            previewContainer: {
                flex:3,
                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.4)',
                minHeight: '500px',
                margin: 20,
            },
        }
        styles.buttonDisabled = Object.assign({}, styles.button, styles.lowOpacity);
        const {newFilename} = this.state //discontructing//
        const {file, files, saveFile} = this.props

        //Button or disabled button
        const button = (newFilename!='') ? (
        <Link to={`/doc/${newFilename}`}>
        <div style={styles.button}>
            Create New document
        </div>
        </Link>
        ) : (
        <div style={styles.buttonDisabled}>
        Create New document
        </div>
        );
        return (
        <div>
            <p className="App-intro">
                Welcome - time to write some code!
            </p>
            <p> 
            <input type="text" name="name" onChange={this.setFilename} value={newFilename} /> 
            {button}
            </p>

            <div style={styles.flexContainer}>
                <div style={styles.filesContainer}>
                    <h2>Files</h2>
                    {Object.keys(files).map(filename => <FileListItem key={filename} filename={filename} />)}
                </div>
                <div style={styles.previewContainer}>
                    <h2>File</h2>
                    {file && (
                        <Document file={file} saveFile={saveFile} />
                    )}
                </div>
            
            </div>

        </div>
        )
    }
}
Document.propTypes = {
    files: PropTypes.object.isRequired,
    file: PropTypes.object,
    saveFile: PropTypes.func.isRequired,
};

export default Home