import React, { Component } from 'react';
import './App.css';
import SaudaçaoJumbotron from './JumbotronComponent.js';
import NavbarHomePage from './NavBarComponent.js';
import CarouselHomePage from './CarouselComponent.js';
import CardsHomePage from './CardComponents.js';
import DivJumbotron from './JumbotronComponent2.js';
import ProgressHomePage from './ProgressComponent.js';
class App extends Component {
  render() {
    return (
      <div id="App"> 
        <SaudaçaoJumbotron/>  
        <div id="NavBarBackground">
          <NavbarHomePage/> 
        </div> 
        <CarouselHomePage/>
        <div>
          <CardsHomePage/> 
        </div>
        <div id="Jumbotron2Style1">
          <DivJumbotron/>
        </div>  
        <div id="ProgressStyle1">
          <h1></h1>
          <h1>Avaliação das crianças do Code Club Maceió</h1>
        </div>
        <div id="ProgressStyle2">
          <p></p>
          <ProgressHomePage/>         
        </div> 
         <DivJumbotron/>
      </div>
    );
  };
};

export default App;