import "./Skills.scss";
import React from "react";
import { FaDatabase, FaGit, FaHtml5, FaJava, FaJsSquare, FaLeaf, FaReact, FaSass } from "react-icons/fa";

const Skills = () => {

    return (
        <section class="grid-container--skills">
            <div class="grid-item">
                <h1>Skills</h1>
            </div>
            <div class="grid-item"><FaGit/><h6>Git</h6></div>
			<div class="grid-item"><FaHtml5/><h6>HTML</h6></div>
			<div class="grid-item"><FaSass/><h6>Sass</h6></div>
			<div class="grid-item"><FaJsSquare/><h6>Javascript</h6></div>
			<div class="grid-item"><FaReact/><h6>React</h6></div>
			<div class="grid-item"><FaJava/><h6>Java</h6></div>
			<div class="grid-item"><FaLeaf/><h6>Spring Boot</h6></div>
			<div class="grid-item"><FaDatabase/><h6>SQL</h6></div>
			<div class="grid-item"><h6>BEM</h6></div>
        </section>
    )
}

export default Skills;
