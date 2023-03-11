import React from 'react';
import {Link} from 'react-router-dom'
import cclogo from '../../resources/images/codecademy-logo.png'
import rulogo from '../../resources/images/rowan-logo.png'
import tcnjlogo from '../../resources/images/tcnj-logo.png'
import htmllogo from '../../resources/images/html-logo.png'
import csslogo from '../../resources/images/css-logo.png'
import jslogo from '../../resources/images/js-logo.png'
import reactlogo from '../../resources/images/react-icon.png'
import reduxlogo from '../../resources/images/redux-logo.png'
import nodelogo from '../../resources/images/node-logo.png'
import gitlogo from '../../resources/images/git-logo.png'
import p3logo from '../../resources/images/python-logo.png'
import mslogo from '../../resources/images/mysql-logo.png'
import downcarrot from '../../resources/images/down-carrot.png'
import './about.css'

export function About() {
    return (
        <main>
            <section className="education-information-container">
                <h1>Education / Certifications</h1>
                <ul className="education-list">
                    <li className="education">
                        <img src={cclogo} className="education-logo" alt='Codecademy logo' />
                        <p>- Full-Stack Engineering Certification (*In Progress*)</p>
                    </li>
                    <li className="education">
                        <img src={cclogo} className="education-logo" alt='Codecademy logo' />
                        <p>- Front-End Engineering Certification (2023)</p>
                    </li>
                    <li className="education">
                        <img src={rulogo} className="education-logo" alt='Rowan University logo' />
                        <p>- Masters of School Administration (2022)</p>
                    </li>
                    <li className="education">
                        <img src={tcnjlogo} className="education-logo" alt='The College of New Jersey logo' />
                        <p>- Bachelor's of Science in Elementary Education & History (2015)</p>
                    </li>
                </ul>
            </section>
            <section className="skills-list-container">
                <h1>Skills</h1>
                <ul className="skills-list">
                    <li className="skill">
                        <img src={htmllogo} className="skill-logo" alt="html logo" />
                        <p>HTML</p>
                    </li>
                    <li className="skill">
                        <img src={csslogo} className="skill-logo" id="css-logo" alt="css logo" />
                        <p>CSS</p>
                    </li>
                    <li className="skill">
                        <img src={jslogo} className="skill-logo" alt="javascript logo" />
                        <p>Javascript</p>
                    </li>
                    <li className="skill">
                        <img src={reactlogo} className="skill-logo" alt="react logo" />
                        <p>React</p>
                    </li>
                    <li className="skill">
                        <img src={reduxlogo} className="skill-logo" alt="redux logo" />
                        <p>Redux</p>
                    </li>
                    <li className="skill">
                        <img src={nodelogo} className="skill-logo" alt="node logo" />
                        <p>Node</p>
                    </li>
                    <li className="skill">
                        <img src={gitlogo} className="skill-logo" alt="git logo" />
                        <p>Git</p>
                    </li>
                    <li className="skill">
                        <img src={p3logo} className="skill-logo" alt="python logo" />
                        <p>Python</p>
                    </li>
                    <li className="skill">
                        <img src={mslogo} className="skill-logo" alt="mysql logo" />
                        <p>MySQL</p>
                    </li>

                </ul>
            </section>
            <section className="about-container">
                <h1>About Me</h1>
                <p>Computer Science has always been a casual hobby of mine, but when it came time for college  I ultimately pursued other ambitions. In 2015 I graduated from The College of New Jersey and quickly accepted my current position as a Middle School Math Teacher in the Perth Amboy School District, a position I've held for the past 7 years. During my time as a teacher, I utilized my expertise in Computer Science by running extracirrcular clubs like "The Coding Club". Most recently, I graduated from Rowan University with a Masters in School Administration. Throughout this program I continued to utilize Computer Science to carry my reports and presentaitons to the next level. <br></br><br></br> Although I have invested much of my educational career in the field of Education, my experience has taught me that my passion for Computer Science has remained prevalent throughout. In following this passion, I have completed certifications through Codecademy and am eager to utilize my skills in your next project.</p>
            </section>
            <div className='contact-form-title'>
                <h1>Let's Connect</h1>
                <img src={downcarrot} alt="down arrow" className="down-carrot" />
                <Link to='/contact'><button className="banner-button">Contact Me!</button></Link>
            </div>
        </main>
    )
}