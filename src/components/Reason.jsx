import React from 'react';

const Reason = ({src, title, content}) => {
    return (
        <div className='reason'>
        <img src={src} alt={title} />

        <h3 className='title'>{title}</h3>
        <p className='content'>{content}</p>
            
        </div>
    );
}

export default Reason;
