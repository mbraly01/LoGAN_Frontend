import React from 'react';
import { Redirect, Route, BrowserRouter, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import Select from 'react-select';
import SelectSearch from 'react-select-search';
import './Home.css';
import createFilterOptions from 'react-select-fast-filter-options';
// import '../../node_modules/react-select/dist/react-select.css';

export default function Home(props) {
const [industryList, setIndustryList] = useState([]);
const [brandName, setBrandName] = useState("");
const [industry, setIndustry] = useState("");
const [gotIndustries, setGotIndustries] = useState(false);

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
          "brand_name": brandName,
          "industry": industry
        }),
      }
      await fetch("http://127.0.0.1:5000/run", configs)

    } 
    getBrand();
    // window.location = '/Images'
    props.setBrandName(brandName)
  }
  useEffect(() => {
      getIndustryList()
      console.log(props.brandName)
      },[])

  return (
    <div> 
        <h1>loGAN</h1>
        <p>Put in a brand name and industry</p>
        <p>loGAN will create a logo for you</p>
        <h2>Brand Name:</h2>
        <div className="center-wrapper">
        <input className="input_box" type="text" onChange={e => setBrandName(e.target.value)}/>
        </div>
        <div>
        </div>
        <h2>Industry:</h2> 
                <Select
                className="Select"
                name="industry"
                value="one"
                options={industryList}
                onChange={val => setIndustry(val["value"])}
              />

        <button>
          <Link to={{
            pathname: `/Images`}}
            onClick={e => loGANRun()}>
          Run</Link></button>
  </div>
)
}