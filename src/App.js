import React from "react";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";


export default function App(){
    return(
        <div className="app">
            <Navbar/>
            <MainContent/>
        </div>
    )
}