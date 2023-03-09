import React from 'react'
import logo from '../../resources/images/logo.png'
import './footer.css'

export function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-content'>
                <img src={logo} className="footer-img" alt="personal logo"/>
                <h4>ⓒ 2023</h4>
            </div>
        </div>
    )
}