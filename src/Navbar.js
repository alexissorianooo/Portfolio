import React from 'react'
import { Link } from 'react-router-dom'
import './css/index.css'

const navbarStyle = "bg-gray-700"

export default function Navbar(){
    return(
        <div className={navbarStyle}>
            <ul>
                <Link to='/portfolio'>Home</Link>
                <Link to='/portfolio/projects'>Projects</Link>
            </ul>
        </div>
    );
}