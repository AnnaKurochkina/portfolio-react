import "./Nav.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Nav = () => {
	const [responsive, setResponsive] = useState(false);

	const toggleResponsive = () => {
		setResponsive(!responsive);
	};

	return (
		<>
			<div className={responsive ? "nav responsive" : "nav"}>
				<Link className="icon" onClick={toggleResponsive}>
					{<FaBars />}
				</Link>
				<Link to="portfolio-react/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/projects">Projects</Link>
				<Link to="/skills">Skills</Link>
				<Link to="/contact">Get in touch</Link>
			</div>
		</>
	);
};

export default Nav;
