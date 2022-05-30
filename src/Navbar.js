import React from 'react'
import { Link } from 'react-router-dom'


const navbarStyle = "bg-dark h-40 flex flex-row justify-end items-center" 
const linkStyle = "text-white p-4 m-2 text-2xl hover:bg-neutral-600 rounded-lg"
const iconStyle = "text-white p-6 m-4 self-center hover:bg-neutral-600 rounded-full"

export default function Navbar(){
    return(
        <div className={navbarStyle}>
            <ul>
                <Link to='/portfolio' className="text-white p-4 text-2xl hover:bg-neutral-600 rounded-lg">Home</Link>
                <Link to='/portfolio/projects' className={linkStyle}>Projects</Link>
                
            </ul>
            <p className={iconStyle}><i className="fa-solid fa-sun fa-2x"></i></p>
        </div>
    );
}