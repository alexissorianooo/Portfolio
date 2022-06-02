import React from 'react'

export default function Home(){
    return(
        <div className='bg-dark h-full text-white flex flex-col justify-center items-center sm:w-3/4 sm:m-auto'>
            <p className='text-2xl m-1 font-bold'>Hello, I am <span className='text-emerald-400'>Alexis</span></p>
            <p className='text-3xl m-1 text-center font-bold'>A Front-End Web Developer</p>
            <p className='text-lg m-1 '>I am a front-end developer that is currently focused on building responsive front-end web applications while learning back-end technologies.</p>
        </div>
    )
}