import React from 'react';
import { useState, useEffect } from 'react';
import GalleryCard from './GalleryCard';

export default function Gallery(props) {
    const [galList, setGalList] = useState([]);
    const makeGallery = async () => {

        const response = await fetch("http://127.0.0.1:5000/makeGallery");
        const data = await response.json();
        setGalList(data.names)
        
        
    }
    const output = galList.map((name) => {
        return (
            <GalleryCard name={name}/>
        )})
    useEffect(() => {
        makeGallery()
    },[])

    return (
        <div>
        <h2>Gallery of Logos</h2>
        <div>{output}</div>
        </div>
    )
}