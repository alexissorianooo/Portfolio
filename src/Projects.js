import React from 'react'
import memeGenerator from './images/memeGenerator.png'

export default function Projects(){
    return(
        <div className='grid text-white md:grid-cols-2'>
            <div className='flex flex-col justify-center items-center'>
                <p className="text-3xl md:text-8xl">Meme Generator</p>
                <p>
                <span className="btn lnk text-2xl md:text-6xl">
                    <a href="https://a-meme-generator.netlify.app" target="_blank" rel="noreferrer">
                        Open live
                    </a>
                </span>
                <span className="btn lnk text-2xl md:text-6xl">
                    <a href="https://github.com/alexissorianooo/memegenerator" target="_blank" rel='noreferrer'>
                        View code
                    </a>
                </span>
                </p>
            </div>
            <div>
                <img src={memeGenerator} alt="Meme Generator"/>
            </div>
            <div>
                <a href="https://codepen.io/alexissorianooo/full/WNMORMa" target="_blank" rel="noreferrer">
                    Pomodoro Clock
                </a>
            </div>
            <div>

            </div>
        </div>
    )
}