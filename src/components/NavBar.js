import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
    
        <nav>
            <Link to="/">HomePage</Link>&nbsp;
            <Link to="/about">About</Link>&nbsp;
            <Link to="/form">Form</Link>&nbsp;
        </nav>
    )
}

export default NavBar

