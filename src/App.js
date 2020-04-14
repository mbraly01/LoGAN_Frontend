import React from 'react';
import { Redirect, Route, BrowserRouter, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import Images from './components/Images.js';
import { withRouter } from 'react-router-dom';
import Home from './components/Home.js';
import Gallery from './components/Gallery.js';
import './App.css';
function App() {
  const [brandName, setBrandName] = useState("bill");

  return (
      <div>
        <BrowserRouter>
        <Switch>
        <Route exact path="/" component={(props) => <Home {...props} brandName={brandName} setBrandName={setBrandName} />}/> 
        <Route exact path="/Images" component={(props) => <Images {...props} brandName={brandName}/>}/>
        <Route exact path="/Gallery" component={Gallery}/>
        </Switch>
        </BrowserRouter>
    </div>
    )
}

export default App;








// import Select from 'react-virtualized-select';
// import createFilterOptions from 'react-select-fast-filter-options';
// // import 'react-select/dist/react-select.css';
// // import 'react-virtualized/styles.css'
// // import 'react-virtualized-select/styles.css'
 
// function
// const options = [
//     // ...
//     { value: 'Stanford University', label: 'Stanford' },
//     // ...
// ];
 
// const filterOptions = createFilterOptions({ options });
 
// const field = ({ options }) => (
//     <Select
//         name="university"
//         value="one"
//         options={options}
//         filterOptions={filterOptions}
//         onChange={val => console.log(val)}
//     />
// );


















// import React from 'react';
// import IconButton from '@material-ui/core/IconButton';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';



// const options = [
//   'None',
//   'Atria',
//   'Callisto',
//   'Dione',
//   'Ganymede',
//   'Hangouts Call',
//   'Luna',
//   'Oberon',
//   'Phobos',
//   'Pyxis',
//   'Sedna',
//   'Titania',
//   'Triton',
//   'Umbriel',
// ];

// const ITEM_HEIGHT = 48;

// export default function LongMenu() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);

//   const handleClick = event => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <IconButton
//         aria-label="more"
//         aria-controls="long-menu"
//         aria-haspopup="true"
//         onClick={handleClick}
//       >
//         {/* <MoreVertIcon /> */}
//       <button>Select Me!</button>
//       </IconButton>
//       <Menu
//         id="long-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={open}
//         onClose={handleClose}
//         PaperProps={{
//           style: {
//             maxHeight: ITEM_HEIGHT * 4.5,
//             width: '20ch',
//           },
//         }}
//       >
//         {options.map(option => (
//           <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
//             {option}
//           </MenuItem>
//         ))}
//       </Menu>
//     </div>
//   );
// }







// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { Redirect, Route, BrowserRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Images from "./components/Images.js";

// function App() {

//   const [industryList, setIndustryList] = useState([]);
//   const [brandName, setBrandName] = useState("");
//   const [userIndustry, setUserIndustry] = useState("");
//   const [state, setState] = useState();
//   const [done, setDone] = useState(false);

//   const getIndustry = () => {
//     return(
//       {userIndustry}
//     )
//   }

//   async function getIndustryList() {
//     const response = await fetch("http://127.0.0.1:5000/industries")
//     const data = await response.json();
//     setIndustryList(data["industry_list"].map((industry) => (
//       <Dropdown.Item onClick={e => setUserIndustry(industry)}>{industry}</Dropdown.Item>
//     )))
//     // setIndustryList(data["industry_list"])
//   }

//   async function loGanRun() {
//     async function getBrand() {

//       const configs = {
//         method: "POST",
//         mode: "cors",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify({
//           "brand_name": brandName,
//           "industry": userIndustry
//         }),
//       }
//       await fetch("http://127.0.0.1:5000/feed", configs)

//     }

//     getBrand();
//   }
//   return (

    
  //   <div>
  //   <div>
  //   <link
  //   rel="stylesheet"
  //   href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
  //   integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
  //   crossOrigin="anonymous"
  // />
  // </div>
  // <div>
  //   <input type="text" onChange={e => setBrandName(e.target.value)}/>
  //   <Button onClick={loGanRun}>Button</Button>
  //   <Dropdown>
  //   Industries
  //     <Dropdown.Toggle variant="secondary" id="dropdown-basic" onClick={getIndustryList}/>

  //     <Dropdown.Menu onClick={getIndustryList}>

  //     </Dropdown.Menu>
  //   </Dropdown>
  //   {/* <BrowserRouter>
  //         <Route exact path="/">
  //       {done ? <Redirect to="/Images"/> : <p></p>}
  //         </Route>
  //   </BrowserRouter> */}
  // {/* <Button component={Link} to="/Images" onClick={loGanRun}></Button> */}
  // <BrowserRouter>
  // <Button component={Link} to="/Images" onClick={e => loGanRun}>Click Me</Button>
  // </BrowserRouter>
  // </div>
  // </div>
  //)
  // return (
  //   <div className="App">
  //     <button onClick={e => getIndustryList()}>Button2</button>
  //     <input type="text" onChange={e => setBrandName(e.target.value)}/>
  //     <Dropdown title="Select location" list={this.state.location}/>
  //     <button onClick={e => loGanRun()}>Button</button>
  //     {/* <BrowserRouter>
  //       <Route path="/Images" component={Images}/>
  //       <Link to="/Images">About</Link>
  //     </BrowserRouter> */}
  //   </div>
  // );
//}

//export default App;
