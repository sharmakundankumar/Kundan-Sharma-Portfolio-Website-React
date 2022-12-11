
import './App.css';
import Header from './components/Header/index'
import NavBar from './components/NavBar/index'
import About from './components/About/index'
import Experience from './components/Experience/index'
import Services from './components/Services/index'
import Portfolio from './components/Portfolio/index'
import Testimonials from './components/Testimonials/index'
import Contact from './components/Contact/index'
import Footer from './components/Footer/index'
function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
