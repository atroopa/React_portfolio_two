import About from './components/About.jsx';
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
      <SocialLinks/>

    </div>
  );
}

export default App;