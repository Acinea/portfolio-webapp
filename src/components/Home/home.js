import React from 'react';
import { Link } from 'react-router-dom'
import downcarrot from '../../resources/images/down-carrot.png';
import kenneddit from '../../resources/images/kenneddit-desktop.png'
import portdesktop from '../../resources/images/portfolio-webapp-desktop.png'
import pythondesktop from '../../resources/images/pythondesktop.png'
import htmllogo from '../../resources/images/html-logo.png'
import csslogo from '../../resources/images/css-logo.png'
import jslogo from '../../resources/images/js-logo.png'
import reactlogo from '../../resources/images/react-icon.png'
import reduxlogo from '../../resources/images/redux-logo.png'
import p3logo from '../../resources/images/python-logo.png'
import jlogo from '../../resources/images/jupyter-logo.png'
import './home.css';

export function Home() {
    return (
        <main className='homepage'>
            <section className="banner-container">
                <div className="banner-text-container">
                    <h1>Full-Stack Engineer</h1>
                    <h2>Designing engaging digital soloutions that improve performance & user-experience</h2>
                    <Link to='/contact'><button className="banner-button" id="home-banner-button">Contact Me!</button></Link>
                </div>
            </section>
            <section className='featured-work-container'>
                <div className='featured-work-title'>
                    <h1>Featured Work</h1>
                    <img src={downcarrot} alt="down arrow" className="down-carrot" />
                </div>
                <div className='featured-work'>
                    <div className='top'>
                        <div className="featured-work-description">
                            <div className='top-content'>
                                <h1>Kenne-ddit</h1>
                                <p>A lite Reddit Client built in React. This client extracts and organizes JSON data from the Reddit API to allow users to search for their favorite sub-reddit, and view relavent posts and comments with a simple, yet beautiful UI.</p>
                                <div className="skills-used-container">
                                    <p><b>Skills Used:</b></p>
                                    <img src={htmllogo} className="skill-logo" alt="html logo" />
                                    <img src={csslogo} className="skill-logo" id="css-logo" alt="css logo" />
                                    <img src={jslogo} className="skill-logo" alt="javascript logo" />
                                    <img src={reactlogo} className="skill-logo" alt="react logo" />
                                    <img src={reduxlogo} className="skill-logo" alt="redux logo" />
                                </div>
                            </div>
                        </div>
                        <a  className="featured-links" href="https://acinea.github.io/reddit-client/" target="_blank" rel="noreferrer"><img src={kenneddit} className="desktop-image" alt="desktop template"/></a>
                    </div>
                    <div className='mid'>
                        <a className="featured-links" href="/"><img src={portdesktop} className="desktop-image" alt="desktop template"/></a>
                        <div className="featured-work-description">
                            <div className='mid-content'>
                                <h1>Portfolio Webapp</h1>
                                <p>This website is built on React! What initially started as an HTML/CSS site has been updated as a React App.</p>
                                <div className="skills-used-container">
                                    <p><b>Skills Used:</b></p>
                                    <img src={htmllogo} className="skill-logo" alt="html logo" />
                                    <img src={csslogo} className="skill-logo" id="css-logo" alt="css logo" />
                                    <img src={jslogo} className="skill-logo" alt="javascript logo" />
                                    <img src={reactlogo} className="skill-logo" alt="react logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bot'>
                        <div className="featured-work-description">
                            <div className='bot-content'>
                                <h1>Python U.S Medical Insurance Analysis</h1>
                                <p>Using Jupyter Notebook and Pyton3, this file contains the results of extracting and organizing raw Medical Insurance Data from Kaggle Datasets.</p>
                                <div className="skills-used-container">
                                    <p><b>Skills Used:</b></p>
                                    <img src={p3logo} className="skill-logo" alt="python logo" />
                                    <img src={jlogo} className="skill-logo" alt="python logo" />
                                </div>
                            </div>
                        </div>
                        <a className="featured-links" href="https://github.com/Acinea/Python-Medical-Data-Project" target="_blank" rel="noreferrer"><img src={pythondesktop} className="desktop-image" alt="desktop template"/></a>
                    </div>
                </div>
            </section>
            <div className='contact-form-title'>
                <h1>Let's Connect</h1>
                <img src={downcarrot} alt="down arrow" className="down-carrot" />
                <Link to='/contact'><button className="banner-button">Contact Me!</button></Link>
            </div>
        </main>
    )
}