import React from 'react';
import downcarrot from '../../resources/images/down-carrot.png';
import desktop from '../../resources/images/desktop-template.png';
import './home.css';

export function Home() {
    return (
        <div className='homepage'>
            <div className="banner-container">
                <div className="banner-text-container">
                    <h1>Full-Stack Engineering</h1>
                    <h2>Designing engaging digital soloutions that improve performance & user-experience</h2>
                    <button className="banner-button">Contact Me!</button>
                </div>
            </div>
            <div className='featured-work-container'>
                <div className='featured-work-title'>
                    <h1>Featured Work</h1>
                    <img src={downcarrot} alt="down arrow" className="down-carrot" />
                </div>
                <div className='featured-work'>
                    <img src={desktop} alt="desktop template"/>
                    <img src={desktop} alt="desktop template"/>
                    <img src={desktop} alt="desktop template"/>
                </div>
            </div>
        </div>
    )
}