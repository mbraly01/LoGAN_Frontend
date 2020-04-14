import React from 'react';
import './GalleryCard.css';

export default function GalleryCard (props) {

    return(
        <div>
        <span><img src= {`gallery/${props.name}.jpg`}/></span>
        <span><h2>{props.name}</h2></span>
        </div>
        )
}