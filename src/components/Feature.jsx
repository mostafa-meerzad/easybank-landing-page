import React from 'react';

export const Feature = ({src, title, content}) => {
    return (
        <section className='feature'>
        <img className='feature-img' src={src} alt={title} />

        <h3 className='title'>{title}</h3>
        <p className='content text-content'>{content}</p>
            
        </section>
    );
}
