import React from 'react';
import thesis_document from '../Photos/thesisdraft2.pdf'

const Thesis = () =>{
    return (
        <div>
            <embed src= {thesis_document} width="800px" height="2100px" />
        </div>
    )
}

export default Thesis;