import React from 'react'
import logo from '../../resources/images/logo.png'
import './footer.css'

export function Footer() {
    return (
        <footer>
            <section className='contact-info-container'>
                <div className='contact-info'>
                    <h2>Location</h2>
                    <p className='contact-info-border'></p>
                    <h4>Old Bridge, New Jersey</h4>
                </div>
                    <div className='contact-info'>
                    <h2>Phone</h2>
                    <p className='contact-info-border'></p>
                    <h4>(848) 459-0968</h4>
                </div>
                <div className='contact-info'>
                    <h2>Email</h2>
                    <p className='contact-info-border'></p>
                    <h4>acinea.kennedy@gmail.com</h4>
                </div>
                <div className='contact-info' id='github-info'>
                    <h2>Github</h2>
                    <p className='contact-info-border'></p>
                    <a className='github-link' href="https://github.com/Acinea" target="_blank" rel="noreferrer" ><h4>https://github.com/Acinea</h4></a>
                </div>             
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