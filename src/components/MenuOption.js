import React, { Component } from 'react';
import './MenuOption.css';


export class MenuOption extends React.Component{
    constructor(props){
        super(props);

    }

    render() {
        return(
            <div className="menuOption">  
            {this.props.title}
            </div>
        );
    }
}