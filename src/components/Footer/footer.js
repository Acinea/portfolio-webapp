import React from 'react'
import logo from '../../resources/images/logo.png'
import './footer.css'

export function Footer() {
    return (
        <footer>
            <section className='contact-info-container'>
                <h2 className='contact-info'>Location</h2>
                <h2 className='contact-info'>Phone</h2>
                <h2 className='contact-info'>Email</h2>
                <h2 className='contact-info'>Github</h2>
                <p className='contact-info-border'></p>
                <p className='contact-info-border'></p>
                <p className='contact-info-border'></p>
                <p className='contact-info-border'></p>
                <h3 className='contact-info'>Old Bridge, New Jersey</h3>
                <h3 className='contact-info'>(848) 459-0968</h3>
                <h3 className='contact-info'>acinea.kennedy@gmail.com</h3>
                <h3 className='contact-info'>https://github.com/Acinea</h3>
            </section>
            <div className='footer-container'>
                <div className='footer-content'>
                    <img src={logo} className="footer-img" alt="personal logo"/>
                    <h4>ⓒ 2023</h4>
                </div>
            </div>
        </footer>
    )
}