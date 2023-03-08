import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import './header.css'

export function Header() {
    const [active, setActive] = useState(false);
    const toggleMenu = () => {
        active === false ? setActive(true) : setActive(false)
    }

    return (
        <div>
            <header>
                <div className={active ? "header-menu-button-active" : "header-menu-button-inactive"}>
                    {active ? <MenuOpenIcon  fontSize='large' onClick={toggleMenu} /> : <MenuIcon fontSize='large' onClick={toggleMenu} />}
                </div>
                <div className='header-logo-container'>
                    <img src="./resources/images/logo.png" />
                    <h1>James Kennedy</h1>
                </div>
                <nav className={active ? 'nav-menu-container-active' : 'nav-menu-container-inactive'}>
                    <ul>
                        <li>Home</li>
                        <li>Portfolio</li>
                        <li>Resume</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}