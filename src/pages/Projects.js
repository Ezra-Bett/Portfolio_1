import React from "react";

function Projects() {
    return (

        <div className="projects-hero">

        <div className="projects-overlay">

        <div className="projects-s">
            <div className="content-row">
                {/*<h3>Project 1</h3>*/}
                <img src="/react.jpg" alt="" className="content-image" />
                <div className="content-text">
                    {/*<h3>Project 1</h3>*/}
                    <p>
                        A Web Application built with React And Node Js.
                    </p>
                    <a href="/Resume.pdf" download className="learn-more-btn">Learn more</a>
                </div>
            </div>

        </div>

        </div>


        </div>


    );
}

export default Projects;