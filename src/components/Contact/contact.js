import React from 'react'
import { Form } from '../Form/form'
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
            <Form />
        </main>
    )
}