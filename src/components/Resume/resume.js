import React from 'react'
import { Link } from 'react-router-dom'
import file from './resume.pdf'
import downcarrot from '../../resources/images/down-carrot.png'
import './resume.css'

export function Resume() {

    return (
        <main className="resume-container">
            <iframe src={file} width="1000vw" height="800vh" title="Resume" />
            <div className='contact-form-title'>
                <h1>Lets Connect</h1>
                <img src={downcarrot} alt="down arrow" className="down-carrot" />
                <Link to='/portfolio-webapp/contact'><button className="banner-button">Contact Me!</button></Link>
            </div>
        </main>
    )
}