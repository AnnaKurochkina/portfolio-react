import "./About.scss";
import React from "react";

const About = () => {

    return (
        <section class="grid-container--about" id="about">
        <div class="grid-item photo">
            <h1>About</h1>
            <img src="Me12.jpg" alt="Anna" />
            <p>
                Highly motivated, open for challenges, patient, observant, stress tolerant, quick and diligent
                learner.
                The most important thing for me in a job is to see the result of my effort. I have experience in the
                tourism and travel industry,
                personal assistance (secretary), and beauty industry (salon beauty therapist). My last occupation
                was teaching English as a foreign language in Russia.
            </p>
            <p>
                I am a native Russian speaker, very fluent in English, IT literate, attentive to detail, committed
                and trustworthy.
                I relocated from Russia to the UK in the beginning of 2021, got married to an EU citizen who has
                settled status in the UK,
                and now I’m looking for a fresh start and a new direction for my career.
            </p>
            <p>
                That’s why I’ve been making myself familiar with C#, ASP.NET, JavaScript, HTML, CSS, Sass,
                Bootstrap, WinForms, Blazor, Razor pages,
                and some basic algorithms, by using various free online resources including Microsoft, Codecademy,
                Code First Girls, Moo ICT, Khan Academy,
                and GitHub. Currently I'm studying at _nology IT-consultansy bootcamp.
            </p>
        </div>
        <div class="grid-item">
            <h2>Experience</h2>
            <ul>
                <li>Trainee Sofware Developer at _nology</li>
                <li>ESL teacher</li>
                <li>Nail technitian</li>
                <li>Secretary</li>
                <li>Travel agent</li>
            </ul>
        </div>
        <div class="grid-item">
            <h2>Interests</h2>
            <ul>
                <li>Painting</li>
                <li>Camping</li>
                <li>Cooking</li>
            </ul>
        </div>
    </section>
    )
}

export default About;
