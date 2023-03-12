import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../resources/images/logo.png'
import './header.css'

export function Header() {
    const [active, setActive] = useState(false);
    const toggleMenu = () => {
        active === false ? setActive(true) : setActive(false)
    }

    return (
            <header>
                <div className={"header-menu-button-inactive"} >
                    <MenuIcon fontSize='large' onClick={toggleMenu} />
                </div>
                <Link to='/portfolio-webapp/' className='header-link'><div className='header-logo-container'>
                    <img src={logo}  alt="personal-logo"/>
                    <h1>James Kennedy</h1>
                </div></Link>
                <nav className={active ? 'nav-menu-container-active' : 'nav-menu-container-inactive'}>
                    <div className="menu-title-container">
                        <div className="header-menu-button-active">
                            <CloseIcon fontSize='large' onClick={toggleMenu} />
                        </div>
                        <h2>Menu</h2>
                    </div>
                    <div className={active ? 'blackout-active' : 'blackout-inactive'} onClick={toggleMenu}>

                    </div>
                    <ul className="menu-list">
                        <Link to='/portfolio-webapp/' className="nav-link" onClick={toggleMenu}><li>Home</li></Link>
                        <Link to='/portfolio-webapp/about' className="nav-link" onClick={toggleMenu}><li>About Me</li></Link>
                        <Link to='/portfolio-webapp/resume' className="nav-link" onClick={toggleMenu}><li>Resume</li></Link>
                        <Link to='/portfolio-webapp/contact' className="nav-link" onClick={toggleMenu}><li>Contact Me!</li></Link>
                    </ul>
                </nav>
            </header>
    )
}