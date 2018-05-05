import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const FileListItem = ({filename}) => {
    

    return (
        <div>
            
             <Link to ={`/doc/${filename}`} >
                <p>
                    {filename}
                </p>
             </Link> 
            
        </div>

    );
};

export default FileListItem;





