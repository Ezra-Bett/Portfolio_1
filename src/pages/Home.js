import React from 'react';
import '../App.css'; // or './App.css' depending on file structure
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Home() {
    return (
        <div className="home-hero">
            <div className="home-overlay">

                <div className="container">
                    <img src="/face3.png" alt="" className="face"/>
                </div>

                <h1>Michael Davis</h1>
                <p>I am a full stack developer with experience in:</p>
                <ul>
                    <li>Web Applications</li>
                    <li>Enterprise Software</li>
                    <li>Mobile Applications</li>
                </ul>


                <a href="/Resume.pdf" download className="resume-download-btn">Download Resume</a>
                <div className="home-links">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                    </a>{" "}
                    <a href="https://github.com/Ezra-Bett" target="_blank" rel="noreferrer">
                        <FaGithub />
                    </a>
                </div>


            </div>
        </div>
    );
}

export default Home;
