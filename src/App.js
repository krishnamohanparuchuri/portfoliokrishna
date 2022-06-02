import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Profile from './PortfolioContainer/Home/Profile';
import NavBar from './PortfolioContainer/NavBar/NavBar';
import Experience from './PortfolioContainer/Experience/Experience';
import Services from './PortfolioContainer/Services/Services';
import ContactMe from './PortfolioContainer/ContactMe/ContactMe';
import Footer from './PortfolioContainer/Footer/Footer';
import AboutMe from './PortfolioContainer/AboutMe/AboutMe';
import Portfolio from './PortfolioContainer/Portfolio/Portfolio';

function App()
{
  AOS.init({
    duration: 1200,
    disable: 'mobile'
  })
  return (
    <div className="App">
      <Profile />
      <NavBar />
      <AboutMe />
      <Experience />
      <Services />
      <Portfolio />
      <ContactMe />
      <Footer />
    </div>
  );
}


export default App;
