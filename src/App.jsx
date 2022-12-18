import "./App.scss";
import Nav from "./Components/Nav/Nav";
import Banner from "./Components/Banner/Banner";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./Components/Footer/Footer";

const App = () => {
    return (
        <div className="App">
            <Nav></Nav>
            <div className="main">
                <Banner></Banner>
                <Projects></Projects>
                <Skills></Skills>
                <About></About>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default App;
