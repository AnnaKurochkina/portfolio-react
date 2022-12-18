import "./Nav.scss";
import React from "react";
import { useState } from "react";

const Nav = () => {

	// const [hamburgerOpen, setHamburgerOpen] = useState(false);

	// const toggleHamburger = () => {
	// 	setHamburgerOpen(!hamburgerOpen);
	// }

    return ( 
		<>
			<div className="sidenav">
			<div className="nav">
				<a href="#home">Home</a>
				<a href="#about">About</a>
				<a href="#projects">Projects and skills</a>
				<a href="#contact">Get in touch</a>
			</div>
			</div>
		</>
    )
}

export default Nav;