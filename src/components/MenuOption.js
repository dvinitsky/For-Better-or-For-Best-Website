import React from 'react';
import './MenuOption.css';


export class MenuOption extends React.Component{
    

    render() {
        return(
            <div className="menuOption">  
            {this.props.title}
            </div>
        );
    }
}