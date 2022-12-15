import "./Banner.scss";
import React from "react";
import Me from "../../Assets/Pictures/Me.png";

const Banner = () => {

    return (
        <div className="grid-container--banner">
            <div className="grid-item">
                <h1>I'm a full-stack Software Developer</h1>
            </div>
            <div className="grid-item__photo">
                <img src={Me} alt="My Photo" />
            </div>
        </div>
    )
}

export default Banner;