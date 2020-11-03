import React from 'react';

interface ImgInputs { src: string, name: string, type?: string, alt: string, styles?: string, size?: string }

export const Img = (el: ImgInputs) =>
    <img alt={el.alt} className={`${el.styles ? el.styles : ''} ${el?.size ? el.size : ''}`}
        src={`${process.env.PUBLIC_URL}/images/${el.src}/${el.name}${el.type ? `.${el.type}` : ''}`} />