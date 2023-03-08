import React from 'react';
import './header.css'

export function Header() {
    return (
        <header>
            <div className='header-logo-container'>
                <img src="./resources/images/logo.png" />
                <h1>James Kennedy</h1>
            </div>
        </header>
    )
}