import React from 'react';
import './Card.css';

const Card = (props) => {

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

export default Card;


























// import React, { Component } from 'react';

// class Card extends Component {
//   constructor() {
//     super();
    
//     this.state = {
//       showMenu: false,
//     };
    
//     this.showMenu = this.showMenu.bind(this);
//     this.closeMenu = this.closeMenu.bind(this);
//   }
  
//   showMenu(event) {
//     event.preventDefault();
    
//     this.setState({ showMenu: true }, () => {
//       document.addEventListener('click', this.closeMenu);
//     });
//   }
  
//   closeMenu(event) {
    
//     if (!this.dropdownMenu.contains(event.target)) {
      
//       this.setState({ showMenu: false }, () => {
//         document.removeEventListener('click', this.closeMenu);
//       });  
      
//     }
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.showMenu}>
//           Show menu
//         </button>
        
//         {
//           this.state.showMenu
//             ? (
//               <div
//                 className="menu"
//                 ref={(element) => {
//                   this.dropdownMenu = element;
//                 }}
//               >
//                 <button> Menu item 1 </button>
//                 <button> Menu item 2 </button>
//                 <button> Menu item 3 </button>
//               </div>
//             )
//             : (
//               null
//             )
//         }
//       </div>
//     );
//   }
// }