import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Images from './components/Images.js';
import Home from './components/Home.js';
import Gallery from './components/Gallery.js';
import './App.css';
function App() {
  const [brandName, setBrandName] = useState("");

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