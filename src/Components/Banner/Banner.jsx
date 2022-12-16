import "./Banner.scss";
import React from "react";
import Me from "../../Assets/Pictures/Me.png";
import PhotoOfMe from "../../Assets/Pictures/PhotoOfMe.png";

const Banner = () => {

    return (
        <div className="grid-container--banner">
            <div className="grid-item">
                <h1>I'm Anna <br/> full-stack Software Developer</h1>
            </div>
            <div className="grid-item__photo">
                <img src={Me} alt="My Photo" />
            </div>
        </div>
    )
}

export default Banner;