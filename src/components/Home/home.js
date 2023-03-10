import React from 'react';
import { Link } from 'react-router-dom'
import downcarrot from '../../resources/images/down-carrot.png';
import kenneddit from '../../resources/images/kenneddit-desktop.png'
import portdesktop from '../../resources/images/portfolio-webapp-desktop.png'
import pythondesktop from '../../resources/images/pythondesktop.png'
import './home.css';

export function Home() {
    return (
        <main className='homepage'>
            <section className="banner-container">
                <div className="banner-text-container">
                    <h1>Full-Stack Engineering</h1>
                    <h2>Designing engaging digital soloutions that improve performance & user-experience</h2>
                    <Link to='/contact'><button className="banner-button">Contact Me!</button></Link>
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
                            </div>
                        </div>
                        <img src={kenneddit} className="desktop-image" alt="desktop template"/>
                    </div>
                    <div className='mid'>
                        <img src={portdesktop} className="desktop-image" alt="desktop template"/>
                        <div className="featured-work-description">
                            <div className='mid-content'>
                                <h1>Portfolio Webapp</h1>
                                <p>This website is built on React! What initially started as an HTML/CSS site has been updated as a React App.</p>
                            </div>
                        </div>
                    </div>
                    <div className='bot'>
                        <div className="featured-work-description">
                            <div className='bot-content'>
                                <h1>Python U.S Medical Insurance Analysis</h1>
                                <p>Using Jupyter Notebook and Pyton3, this file contains the results of extracting and organizing raw Medical Insurance Data from Kaggle Datasets.</p>
                            </div>
                        </div>
                        <img src={pythondesktop} className="desktop-image" alt="desktop template"/>
                    </div>
                </div>
            </section>
            <div className='contact-form-title'>
                <h1>Lets Connect</h1>
                <img src={downcarrot} alt="down arrow" className="down-carrot" />
            </div>
        </main>
    )
}