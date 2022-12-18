import "./About.scss";
import React from "react";
import Me from "../../Assets/Pictures/Me.png";

const About = () => {
    return (
        <section className="grid-container--about about" id="about">
            <div className="grid-item__photo">
                <h1>About</h1>
                <p>
                    <img src={Me} alt="Anna" />I am a native Russian speaker,
                    very fluent in English, IT literate, attentive to detail,
                    committed and trustworthy.
                </p>
                <p>
                    After self relocating to the UK I've been making myself
                    familiar with C#, ASP.NET, JavaScript, HTML, CSS, Sass,
                    Bootstrap, WinForms, Blazor, Razor pages, and some basic
                    algorithms, by using various free online resources including
                    Microsoft, Codecademy, Code First Girls, Moo ICT, Khan
                    Academy, and GitHub.
                </p>
                <p>
                    Currently I am studying to become a full-stack developer
                    with the help of _nology.
                </p>
            </div>
            <div className="grid-item">
                <h2>Experience</h2>
                <ul>
                    <li>Trainee Sofware Developer at _nology</li>
                    <li>ESL teacher</li>
                    <li>Nail technitian</li>
                    <li>Secretary</li>
                    <li>Travel agent</li>
                </ul>
            </div>
            <div className="grid-item">
                <h2>Interests</h2>
                <ul>
                    <li>Painting</li>
                    <li>Camping</li>
                    <li>Cooking</li>
                </ul>
            </div>
        </section>
    );
};

export default About;
