import "./Banner.scss";
import React from "react";
import Me from "../../Assets/Pictures/Me.png";
import PhotoOfMe from "../../Assets/Pictures/PhotoOfMe.png";

const Banner = () => {

    return (
        <div className="grid-container--banner" id="home">
            <div className="grid-item">
				<h1>
					<span>I'm&nbsp;</span>
					<span>Anna,&nbsp;</span><br/>
					<span>junior&nbsp;</span>
					<span>full-stack&nbsp;</span>
					<span>Software&nbsp;</span>
					<span>Developer&nbsp;</span>
				</h1>
            </div>
            <div className="grid-item__photo">
                <img src={Me} alt="My Photo" />
            </div>
        </div>
    )
}

export default Banner;