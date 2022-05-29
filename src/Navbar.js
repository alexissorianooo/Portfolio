import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
    return(
        <div>
            <ul>
                <Link to='/portfolio'>Home</Link>
                <Link to='/portfolio/projects'>Projects</Link>
            </ul>
        </div>

    );
}