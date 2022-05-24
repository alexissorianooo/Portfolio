import React from 'react'
import './css/Footer.css'

function Footer(){
    return(
        <div className="footerMain">
            <h1>Socials</h1>
            <div className="socialsContainer">
                <h3>
                    <a href="https://www.linkedin.com/in/alexis-justin-soriano-a075071b5/" target="_blank" rel="noreferrer">
                        <i class="fa-brands fa-linkedin"></i>
                        {' '}LinkedIn
                    </a>
                </h3>
                <h3>
                    <a href="https://github.com/alexissorianooo" target="_blank" rel="noreferrer">
                        <i class="fa-brands fa-github"></i>
                        {' '}GitHub
                    </a>
                </h3>
            </div>
        </div>
    )
}

export default Footer;