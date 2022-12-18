import "./Footer.scss";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer id="contact" className="contacts">
			<h1>My contacts:</h1><br/>
		<a href="mailto: basia220586@gmail.com">basia220586@gmail.com</a>
        <a href="https://www.linkedin.com/in/anna-kurochkina-99244321b/" target="blank"><FaLinkedin/></a>
        <a href="https://github.com/AnnaKurochkina" target="blank"><FaGithub/></a>
        </footer>
    )
}

export default Footer;