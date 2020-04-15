import React from 'react';
import { useState, useEffect } from 'react';
import GalleryCard from './GalleryCard';

export default function Gallery(props) {
    const [loaded, setLoaded] = useState(true);
    const [galList, setGalList] = useState([]);
    let galLister = undefined
    const makeGallery = async () => {

        const response = await fetch("http://127.0.0.1:5000/makeGallery");
        console.log(response)
        const data = await response.json();
        console.log(data)
        galLister = data.names.map((name) => {
            return (
                <GalleryCard name={name}/>
            )})
        setGalList(galLister)
    }

    // useEffect(() => {
    //     makeGallery()
    // },[loaded])
    if (galList.length < 1) {
        makeGallery()
      }
    return (
        <div>
        <h2>Gallery of Logos</h2>
        <div>{galList}</div>
        </div>
    )
}