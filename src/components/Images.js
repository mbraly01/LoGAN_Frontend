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

function Images(props) {
  // const [galList, setGalList] = useState();
  const name = props.brandName
//   const makeGallery = async () => {

//     const response = await fetch("http://127.0.0.1:5000/makeGallery");
//     console.log(response)
//     const data = await response.json();
//     console.log(data)
//     let galLister = data.names.map((name) => {
//         return (
//             <GalleryCard name={name}/>
//         )})
//     setGalList(galLister)
// }
  useEffect(() => {
    console.log(props.brandName)
 })
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
            >See Gallery of Old Logos</Link></h2>
      </div>
    );
  }
  
  export default Images;








//   const [isLoading, setIsLoading] = useState(false)
//   const [isError, setIsError] = useState(false)
//   const [data, setData] = useState();
//   const card = <p></p>
//   async function getImage1(){
//     const response= await fetch("http://127.0.0.1:5000/img1")
//     const data = await response.json();
//     }
//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       setIsError(false);
//       try {
//         card = getImage1();
//         setData(data)
//       } catch (error) {
//         setIsError(true);
//         console.log(error);
//       }
//       setIsLoading(false);
//     }
//     fetchData();
//   }, [card])
// return(
//   <div className="App"/>
//   </div>
//   { isLoading ? getImage1 : <Card/>}>

// )
// }


// export default App;



// const Images = () => {

//     async function getImage1(){
//         const response= await fetch("http://127.0.0.1:5000/img1")
//         const data = await response.json();
//         return (
//             <Card data="../output/img1.jpg"/>
//         )
//     }

//     useEffect(() => {
//         getImage1()
//     })
//     return (
//         <p></p>
//     )}

//     const image = <p></p>;
//     async function getImage1(){
//         const response = await fetch("http://127.0.0.1:5000/img1")
//         const data = await response.json();
//         return (
//             <Card data="/home/mbraly/python-for-byte-academy/Final_Project/Website/models/output/img1.jpg"></Card>
//         )
//     }
//     async function getImage2(){
//         const response = await fetch("http://127.0.0.1:5000/img2")
//         const data = await response.json();
//         return (
//             <Card data="/home/mbraly/python-for-byte-academy/Final_Project/Website/models/output/img2.jpg"></Card>
//         )
//     }

//     useEffect(() => {
//         getImage1();

//     })

//     return (
//         <script>{
//         getImage1()
//         }
//         </script>
//         return (
//           {image}
//         )
//       }

//         </script>
//     )
// }
