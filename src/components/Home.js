import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import './Home.css';

export default function Home(props) {
  console.log(props)
const [industryList, setIndustryList] = useState([]);
const [tempBrandName, setTempBrandName] = useState("");
const [industry, setIndustry] = useState("");
const [isSet, setIsSet] = useState(false);

async function getIndustryList() {
    const response = await fetch("http://127.0.0.1:5000/industries")
    const data = await response.json()
    setIndustryList(data["industry_list"])
  }

async function loGANRun() {
    async function getBrand() {

      const configs = {
        method: "POST",
        mode: "cors",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          "brand_name": tempBrandName,
          "industry": industry
        }),
      }
      fetch("http://127.0.0.1:5000/run", configs)

    } 
    getBrand();
    props.setBrandName(tempBrandName)
    console.log(props.brandName)
    downloadGallery()
  }

  const downloadGallery = async () => {

    const response = await fetch("http://127.0.0.1:5000/downloadGallery");
    console.log(response)
  }

  useEffect(() => {
      getIndustryList()
      console.log(props.brandName)
      },[isSet])

  return (
    <div> 
        <h1>loGAN</h1>
        <p>Put in a brand name and industry</p>
        <p>loGAN will create a logo for you</p>
        <h2>Brand Name:</h2>
        <div className="center-wrapper">
        <input className="input_box" type="text" onChange={e => setTempBrandName(e.target.value)}/>
        </div>
        <div>
        </div>
        <h2>Industry:</h2> 
                <Select
                defaultValue="Industry"
                className="Select"
                name="industry"
                options={industryList}
                onChange={val => setIndustry(val["value"])}
              />
        <button onClick={props.setBrandName("Greg")}>Hello</button>
          <h2><Link to={{
            pathname: `/Images`,
            state: { brandName: tempBrandName }}}
            onClick={e => loGANRun()}>
          Run</Link></h2>
  </div>
)
}