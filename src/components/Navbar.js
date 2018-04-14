import React from 'react';
import {MenuOption} from './MenuOption';
import './Navbar.css';


export class Navbar extends React.Component {
   

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
