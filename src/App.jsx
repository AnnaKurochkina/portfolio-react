
import './App.scss';
import Nav from './Components/Nav/Nav';
import Banner from './Components/Banner/Banner';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import About from './Components/About/About';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from './Components/Footer/Footer';


const App = () => {
  return ( 
    <div className="App">
      <Nav></Nav>
      <div className="background-color">
      <Banner></Banner>
      <Projects></Projects>
      <Skills></Skills>
      <About></About>
      <Footer></Footer>
      
      </div>
    </div>

  
  );
}

export default App;

       // <footer id="contact">
       // <a href="mailto: basia220586@gmail.com"><b>basia220586@gmail.com</b></a>
       // <a href="https://www.linkedin.com/in/anna-kurochkina-99244321b/">Linkedin<FontAwesomeIcon icon={"fa-brands fa-linkedin"} /></a>
       // {/* <a href="https://www.linkedin.com/in/anna-kurochkina-99244321b/" target="blank"><i className="fa-brands fa-linkedin"></i></a> */}
       // <a href="https://github.com/AnnaKurochkina" target="blank">GitHub<i className="fa-brands fa-square-github"></i></a>
  //  </footer>