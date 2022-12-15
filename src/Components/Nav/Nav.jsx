import "./Nav.scss";
import React from "react";
import { useState } from "react";

const Nav = () => {

	const [hamburgerOpen, setHamburgerOpen] = useState(false);

	const toggleHamburger = () => {
		setHamburgerOpen(!hamburgerOpen);
	}

    return ( 
		<>
			<div className="sidenav">
			{/* <div className="brand">Anna Kurochkina</div> */}
			<div className="nav">
				<a href="#about">About</a>
				<a href="#projects">Projects and skills</a>
				<a href="#contact">Get in touch</a>
			</div>
			</div>

			<div className="hamburger" onClick={toggleHamburger}>
				<a href="#about" className="burger burger1">About</a>
				<a href="#projects" className="burger burger2">Projects and skills</a>
				<a href="#contact" className="burger burger3">Get in touch</a>
				<div className="burger burger1"><a href="#about" className="burger burger1"></a>h</div>
				<div className="burger burger2"></div>
				<div className="burger burger3"></div>
			</div>
		</>
    )
}


export default Nav;