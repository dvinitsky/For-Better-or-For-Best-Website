import React, { Component } from 'react';
import {MenuOption} from './MenuOption';
import './Navbar.css';


export class Navbar extends Component {
    constructor(props){
        super(props);
    }


    render() {
        let key = -1;

    return (
      <div className="container">

        {this.props.menuOptions.map(title => {
          key++;

          return <MenuOption title={title} key={key} />
        })}

      </div>
    )
      }


}
