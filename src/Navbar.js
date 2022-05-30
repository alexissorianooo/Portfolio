import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
    const [menu, setMenu] = React.useState(false)

    function handleClick(){
        setMenu(prevMenu => !prevMenu)
    }
   
    return(
        <div className={!menu ? 'w-screen flex flex-col h-[80px]': `w-screen flex flex-col h-60 md:h-[80px]`}> {/* IF more than 640px => display normal nav height ELSE display hieght for menu*/}
            <div className='bg-dark h-full w-full flex flex-row justify-end items-center'>
                <ul className='md:flex hidden'> {/* IF more than 640px => display: flex ELSE display: hidden */}
                    <Link to='/portfolio' className="lnk">Home</Link>
                    <Link to='/portfolio/projects' className='lnk'>Projects</Link>
                </ul>
                <button className='btn'>
                    <i className="fa-solid fa-sun fa-2x"></i>
                </button>
                <button className='btn md:hidden' onClick={handleClick}>
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>
            <ul className={!menu ? 'hidden' : 'bg-dark flex flex-col items-end md:hidden'}> {/* IF menu === 'false' => display: hidden ELSE IF more than 640px display: hidden */}
                <Link to='/portfolio' className="lnk">Home</Link>
                <Link to='/portfolio/projects' className='lnk'>Projects</Link>
            </ul>
        </div>
    );
}