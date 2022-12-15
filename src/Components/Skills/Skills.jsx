import "./Skills.scss";
import React from "react";

const Skills = () => {

    return (
        <section class="grid-container--skills">
            <div class="grid-item">
                <h1>Skills</h1>
            </div>
            <div class="grid-item">
                <i class="fa-brands fa-html5"></i>
                <h2>HTML</h2>
            </div>
            <div class="grid-item">
                <i class="fa-brands fa-sass"></i>
                <h2>SASS</h2>
            </div>
            <div class="grid-item">
                <i class="fa-brands fa-js"></i>
                <h2>JavaScript</h2>
            </div>
        </section>
    )
}

export default Skills;
