import React from 'react';
import './Card.css';

export default function Card(props) {

  const name = props.data
  const number = props.number

  async function addToGallery(){
    const configs = {
      method: "POST",
      mode: "cors",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "name": name,
        "number": number
      })
    };
    await fetch("http://127.0.0.1:5000/addToGallery", configs)
  }
  
  return (
    <a href={props.image} download={name} onClick={e => addToGallery()}>
    <img id="p2" src={props.image}/>

  </a>
  )}  