import React from "react";
import Header from "../../component/header/header";
import MainFooter from "../../component/footer/mainFooter";
import "./about.css";

function About(){

    return(
        <div className="home_component">
            <Header/>
            
            <div className="about_container">
                <div>
                    <span>Image</span>
                    <p>I spent 5years working both as a freelance web developer
                        and designer. I have worked on several of web projects
                        for range of clients providing web design and Development(
                            CSS,JS, jQUERY,Bootstrap, REACT JS, NODE JS and MONGODB
                        ).<br></br> I have created successful responsive websites that are fast, easy to use, and built with best pratices. 
                        The main area of my specialization is front-end development 
                        building small and medium web apps, animations, and coding interative layouts.
                        I also have full-stack developer experience.
                    </p>
                </div>
                <div className="progress_body">
                    <div className="about_progress">
                        <label>CSS</label>
                        <span><span className="about1"></span></span>
                    </div>
                    <div className="about_progress">
                        <label>HTML</label>
                        <span><span className="about2"></span></span>
                    </div>
                    <div className="about_progress">
                        <label>JAVASCRIPT</label>
                        <span><span className="about3"></span></span>
                    </div>
                    <div className="about_progress">
                        <label>jQUERY</label>
                        <span><span className="about4"></span></span>
                    </div>
                    <div className="about_progress">
                        <label>REACT JS</label>
                        <span><span className="about5"></span></span>
                    </div>
                    <div className="about_progress">
                        <label>NODE JS</label>
                        <span><span className="about6"></span></span>
                    </div>
                    <div className="about_progress">
                        <label>MONGODB</label>
                        <span><span className="about7"></span></span>
                    </div>
                </div>
            </div>
            <MainFooter/>
        </div>
    )
}
export default About;