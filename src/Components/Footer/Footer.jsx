import "./Footer.scss";
import React from "react";

// import { faAtom, faLink, faLinkedi } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    FaSun,
    FaMoon,
    FaBars,
    FaPlus,
    FaEyeSlash,
    FaFolder,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer id="contact">
        <a href="mailto: basia220586@gmail.com"><b>basia220586@gmail.com</b></a>
        <a href="https://www.linkedin.com/in/anna-kurochkina-99244321b/" target="blank">Linkedin</a>
        {/* <FontAwesomeIcon icon={faHome}></FontAwesomeIcon> */}
        <a href="https://github.com/AnnaKurochkina" target="blank">GitHub<i class="fa-brands fa-square-github"></i></a>
        </footer>
    )
}

export default Footer;