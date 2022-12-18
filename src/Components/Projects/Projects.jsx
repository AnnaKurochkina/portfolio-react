import "./Projects.scss";
import React from "react";
import CalculatorPicture3 from "../../Assets/Pictures/CalculatorPicture3.png";
import MemoryGame1 from "../../Assets/Pictures/MemoryGame1.png";
import Punkapi from "../../Assets/Pictures/Punkapi.png";
import QuadraClientProject from "../../Assets/Pictures/QuadraClientProject.png";
import SnapGame from "../../Assets/Pictures/SnapGame.png";
import FullStackProject from "../../Assets/Pictures/FullStackProject.png";

const Projects = () => {
    return (
        <section className="grid-container--projects projects" id="projects">
            <div className="grid-item">
                <h1>Projects</h1>
            </div>
            <div className="grid-item">
                <a href="#">
                    <img
                        src={CalculatorPicture3}
                        alt="Calculator Project Picture"
                    />
                </a>
                <h2>Project Calculator</h2>
                <p>
                    A calculator on{" "}
                    <a href="https://annakurochkina.github.io/ProjectCalculator/">
                        web page
                    </a>
                    , with responsive layout{" "}
                    <a href="https://github.com/AnnaKurochkina/ProjectCalculator">
                        GitHub
                    </a>
                    .
                </p>
            </div>
            <div className="grid-item">
                <a href="#">
                    <img src={MemoryGame1} alt="Memory Game Picture" />
                </a>
                <h2>Project Memory Game</h2>
                <p>
                    A browser-based game on{" "}
                    <a href="https://annakurochkina.github.io/ProjectMemoryGame/">
                        web page
                    </a>
                    using modern JavaScript​ programming techniques and DOM
                    manipulation.
                    <a href="https://github.com/AnnaKurochkina/ProjectMemoryGame">
                        GitHub
                    </a>
                </p>
            </div>
            <div className="grid-item">
                <a href="#">
                    <img src={Punkapi} alt="Punk API project picture" />
                </a>
                <h2>Project Punk-API</h2>
                <p>
                    A React application on{" "}
                    <a href="https://annakurochkina.github.io/punk-api/">
                        web page
                    </a>{" "}
                    that pulls data from an external public API and presents it
                    in a dashboard or multipage layout.
                    <a href="https://github.com/AnnaKurochkina/punk-api">
                        GitHub
                    </a>
                </p>
            </div>
            <div className="grid-item">
                <a href="#">
                    <img src={QuadraClientProject} alt="QuadraClientProject" />
                </a>
                <h2>Quadra client project</h2>
                <p>
                    Currency converter. <a href="https://github.com/nology-tech/quadra-client-project">GitHub</a> Front end web site made with React. Was
                    made from scratch collaboratively with my classmates, for
                    practicing pair-programming and scrum
                </p>
            </div>
            <div className="grid-item">
                <a href="#">
                    <img src={SnapGame} alt="SnapGame" />
                </a>
                <h2>Snap Game</h2>
                <p>
                    Java console based card game{" "}
                    <a href="https://github.com/AnnaKurochkina/SnapGame">
                        GitHub
                    </a>{" "}
                </p>
            </div>
            <div className="grid-item">
                <a href="#">
                    <img src={FullStackProject} alt="FullStackProject" />
                </a>
                <h2>Task Manager</h2>
                <p>
                    Final full-stack project. The project has 2 GitHub
                    repositories - one for the frontend{" "}
                    <a href="https://github.com/AnnaKurochkina/TaskManagerFrontend">
                        GitHub
                    </a>{" "}
                    and one for the backend{" "}
                    <a href="https://github.com/AnnaKurochkina/TaskManagerBackend">
                        GitHub
                    </a>
                    . Still work in progress.
                </p>
            </div>
        </section>
    );
};

export default Projects;
