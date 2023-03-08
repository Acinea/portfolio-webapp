import React, { useState } from 'react';
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
        <div>
            <header>
                <div className={"header-menu-button-inactive"} >
                    <MenuIcon fontSize='large' onClick={toggleMenu} />
                    {/*active ? <MenuOpenIcon  fontSize='large' onClick={toggleMenu} /> : <MenuIcon fontSize='large' onClick={toggleMenu} />*/}
                </div>
                <div className='header-logo-container'>
                    <img src={logo} alt="personal-logo"/>
                    <h1>James Kennedy</h1>
                </div>
                <nav className={active ? 'nav-menu-container-active' : 'nav-menu-container-inactive'}>
                    <div className="menu-title-container">
                        <div className="header-menu-button-active">
                            <CloseIcon fontSize='large' onClick={toggleMenu} />
                        </div>
                        <h2>Menu</h2>
                    </div>
                    <ul className="menu-list">
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