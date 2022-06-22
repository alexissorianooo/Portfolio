import React from 'react'

export default function Navbar(){
    const [menu, setMenu] = React.useState(false)

    function handleClick(){
        setMenu(prevMenu => !prevMenu)
    }
   
    return(
        <div className={!menu ? 'w-full flex flex-col h-[80px]': ` w-screen flex flex-col h-50 md:h-[80px]`}> {/* IF more than 640px => display normal nav height ELSE display hieght for menu*/}
            <div className='bg-dark h-full w-full flex flex-row justify-end items-center'>
                <ul className='md:flex hidden'> {/* IF more than 640px => display: flex ELSE display: hidden */}
                    <li className="lnk">Home</li>
                    <li className="lnk">Projects</li>
                </ul>
                <button className='btn'>
                    <i className="fa-solid fa-sun fa-2x"></i>
                </button>
                <button className='btn md:hidden' onClick={handleClick}>
                    <i className={!menu ? "fa-solid fa-bars" : "fa-solid fa-x"}></i>
                </button>
            </div>
            <div className={!menu ? 'hidden' : 'relative h-full bg-dark md:hidden'}> {/* IF menu === 'false' => display: hidden ELSE IF more than 640px display: hidden */}
                <ul className="relative flex flex-col items-end"> 
                    <li className="lnk">Home</li>
                    <li className="lnk">Projects</li>
                </ul>
            </div>
        </div>
    );
}