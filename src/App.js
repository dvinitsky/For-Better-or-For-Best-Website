import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/Navbar';
import {Container} from './components/Container';


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
      <div className="App">
        <div className="imgContainer">
          {/* change this to a video tag */}
            <img />
            <Navbar menuOptions={this.state.menuOptions} />
            <div className="mainHeader">For Better or For Best Weddings</div>
        </div>

          <div className="subHeader">Because Your Day is in the Details</div>

      <Container />

      </div>
    );
  }
}

export default App;
