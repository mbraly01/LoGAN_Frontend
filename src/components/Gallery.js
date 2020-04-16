import React from 'react';
import { useState, useEffect } from 'react';
import GalleryCard from './GalleryCard';

export default function Gallery(props) {
    const [loaded, setLoaded] = useState(true);
    const [galList, setGalList] = useState([]);
    const makeGallery = async () => {

        const response = await fetch("http://127.0.0.1:5000/makeGallery");
        console.log(response)
        const data = await response.json();
        console.log(data)
        setGalList(data)
        
        
    }
    // <div>{galList.names.map((name) => {
    //     return (
    //         <GalleryCard name={name}/>
    //     )})}</div>
    // useEffect(() => {
    //     makeGallery()
    // },[loaded])
    // if (galList.length < 1) {
    //     makeGallery()
    //     time.sleep(5)
    //   }
    return (
        <div>
            <button onClick={makeGallery}>Click Button</button>
        <h2>Gallery of Logos</h2>
        <div>{galList}</div>
        </div>
    )
}