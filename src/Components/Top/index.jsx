import React from "react";
import "./style.css"

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            header: "To Do App"
        }
    }

    render(){
    return (

        <div className="header-top">
        <h1>{this.state.header}</h1>
        </div>
    )
    }
    
}


