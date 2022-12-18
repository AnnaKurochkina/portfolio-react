import "./Nav.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const Nav = () => {

    return (
        <>
            <div className="sidenav">
                <div className="nav">
                    <Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/projects">Projects</Link>
					<Link to="/skills">Skills</Link>
					<Link to="/contact">Get in touch</Link>
                </div>
            </div>
        </>
    );
};

export default Nav;
