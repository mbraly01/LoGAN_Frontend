import React, { useState, useEffect } from 'react';
//import './App.css';
// import Images from './components/Images';
import { Redirect, Route, BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import Card from './Card';
import './Images.css';
import GalleryCard from './GalleryCard';
import image1 from '../output/img1.jpg';
import image2 from '../output/img2.jpg';
import image3 from '../output/img3.jpg';
import image4 from '../output/img4.jpg';
import image5 from '../output/img5.jpg';
import image6 from '../output/img6.jpg';
import image7 from '../output/img7.jpg';
import image8 from '../output/img8.jpg';
import image9 from '../output/img9.jpg';

export default function Images(props) {
  // const [brandName, setBrandName] = useState("");
  const name = props.brandName
  useEffect(() => {
    console.log(props.brandName)
 })

 const downloadGallery = async () => {

  fetch("http://127.0.0.1:5000/downloadGallery");
}
    return (
      <div className="App">
        <h2>Click Image to Download</h2>
        <div>
          <div>
        <Card image={image1} data={name} number="1"/>
        <Card image={image2} data={name} number="2"/>
        <Card image={image3} data={name} number="3"/>
        </div>
        <div>
        <Card image={image4} data={name} number="4"/>
        <Card image={image5} data={name} number="5"/>
        <Card image={image6} data={name} number="6"/>
        </div>
        <div>
        <Card image={image7} data={name} number="7"/>
        <Card image={image8} data={name} number="8"/>
        <Card image={image9} data={name} number="9"/>
        </div>
        </div>
        <h2><Link to={{
            pathname: `/Gallery`}}
            onClick={e => downloadGallery()}
            >See Gallery of Old Logos</Link></h2>
      </div>
    );
  }
