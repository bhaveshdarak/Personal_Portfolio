import React, { useState } from 'react'
import "./Header.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-scroll';

function Header() {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <nav className="main-nav">
                <div className="logo">
                    <h2>
                        <span>B</span>havesh~
                    </h2>
                </div>

                <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                    {/* <ul>
                        <li>
                            <a href="/home">Home</a>
                        </li>
                        <li>
                            <a href="#aboutMe">About Me</a>
                        </li>
                        <li>
                            <a href="#resume">Resume</a>
                        </li>
                        <li>
                            <a href="#contactMe">Contact Me</a>
                        </li>
                    </ul> */}
                    <ul >
                        <li>
                            <Link className='link' to='home' smooth={true} duration={100}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className='link' to='about' smooth={true} duration={100}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link className='link' to='resume' smooth={true} duration={100}>
                                Resume
                            </Link>
                        </li>
                        <li>
                            <Link className='link' to='ContactMe' smooth={true} duration={100}>
                                Contact Me
                            </Link>
                        </li>
                        
                    </ul>

                </div>

                <div className="social-media">

                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu className='header-hamburger-bars' />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header






