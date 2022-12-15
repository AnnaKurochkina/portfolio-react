import "./Nav.scss";
import React from "react";

const Nav = () => {

    return (
        <div className="header">
        <div className="brand">Anna Kurochkina</div>
        <div className="nav">
            <a href="#about">About</a>
            <a href="#projects">Projects and skills</a>
            <a href="#contact">Get in touch</a>
        </div>
        </div>
    )
}


export default Nav;