import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import "./styles.css";


export default function Menu() {
    
    return (
            
        <nav id="nav-container">
            <Link to="/">Starter</Link>
            <Link to="/ender">Ender</Link>
        </nav>
        
    );

}
