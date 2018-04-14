import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/Navbar';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuOptions: ["Day of Coordination",
    "DJ & Emcee", "Graphic Design", 
    "Photo Booth"]
    };
  }


  render() {
    return (
      <div>
        <div className="App">
          <video></video>
          <Navbar menuOptions={this.state.menuOptions} />
          
          <div className="mainHeader">For Better or For Best Weddings</div>
        

        </div>
        <div className="subHeader">Because Your Day is in the Details</div>

      </div>
    );
  }
}

export default App;
