import React from 'react'

function Footer(){
    return(
        <div className="bg-dark text-white">
            <p>Created with React and Tailwind CSS</p>
            <h1>Socials</h1>
            <div className="">
                <h3>
                    <a href="https://www.linkedin.com/in/alexis-justin-soriano-a075071b5/" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-linkedin"></i>
                        {' '}LinkedIn
                    </a>
                </h3>
                <h3>
                    <a href="https://github.com/alexissorianooo" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-github"></i>
                        {' '}GitHub
                    </a>
                </h3>
            </div>
        </div>
    )
}

export default Footer;