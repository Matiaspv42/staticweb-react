import React from "react";
import '../style.css'
import reactLogo from '../images/react-logo.png'


export default function Navbar(){
    return (
        <nav className="navBar">
            <div className="logo">
              <img src={reactLogo} width={'50px'} alt=''/>
              <p>ReactFacts</p>
            </div>
            
            <div className="subtitle">
                <p>React Course - Project 1</p>
            </div>
        </nav>
    )
}