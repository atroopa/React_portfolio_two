import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Home from './components/Home.jsx';
import NavBar from './components/NavBar.jsx';
import Portfolio from './components/Portfolio.jsx';
import SocialLinks from './components/SocialLinks.jsx';

function App() {
  return (
    <div>

      <NavBar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <SocialLinks/>

    </div>
  );
}

export default App;