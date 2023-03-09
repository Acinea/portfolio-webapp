import React from 'react'
import downcarrot from '../../resources/images/down-carrot.png';
import './contact.css'

export function Contact() {
    return (
        <main className='contact-page'>
            <div className='contact-banner-container'>
                <div className='contact-banner-text-container'>
                    <h1>Contact Me</h1>
                    <h3>Let's discuss an oppurtunity to work together!</h3>
                    <a href="#form-anchor"><button className="contact-banner-button">Contact Me!</button></a>
                </div>
            </div>
            <div id="form-anchor" className='contact-form-title'>
                <h1>Lets Connect</h1>
                <img src={downcarrot} alt="down arrow" className="down-carrot" />
            </div>
            <section className='contact-form-container'>
                <form className='contact-form'>
                    <div className="input-container">
                        <input required className='input' type="text" name="name" placeholder="Your Name" />
                        <input required className='input' type="email" name="email" placeholder="Your Email" />
                        <input required className='input' type="text" name="web" placeholder="Your Company/Website" />
                    </div>
                    <br></br>
                    <div className="textarea-container">
                        <textarea required className="textarea" name="contact-content" placeholder="What would you like to discuss?" cols="100" rows="10" resize="none"></textarea>
                    </div>
                    <br></br>
                    <div className="contact-submit-button-container">
                        <input type="submit" value="Submit" className="contact-submit-button" /> 
                    </div>
                </form>
            </section>
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
        </main>
    )
}