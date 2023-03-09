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
        <div>
            <header>
                <div className={"header-menu-button-inactive"} >
                    <MenuIcon fontSize='large' onClick={toggleMenu} />
                    {/*active ? <MenuOpenIcon  fontSize='large' onClick={toggleMenu} /> : <MenuIcon fontSize='large' onClick={toggleMenu} />*/}
                </div>
                <Link to='/' className='nav-link'><div className='header-logo-container'>
                    <img src={logo} alt="personal-logo"/>
                    <h1>James Kennedy</h1>
                </div></Link>
                <nav className={active ? 'nav-menu-container-active' : 'nav-menu-container-inactive'}>
                    <div className="menu-title-container">
                        <div className="header-menu-button-active">
                            <CloseIcon fontSize='large' onClick={toggleMenu} />
                        </div>
                        <h2>Menu</h2>
                    </div>
                    <ul className="menu-list">
                        <Link to='/' className="nav-link"><li>Home</li></Link>
                        <Link to='/' className="nav-link"><li>About Me</li></Link>
                        <Link to='/' className="nav-link"><li>Portfolio</li></Link>
                        <Link to='/' className="nav-link"><li>Resume</li></Link>
                        <Link to='/contact' className="nav-link"><li>Contact</li></Link>
                    </ul>
                </nav>
            </header>
        </div>
    )
}