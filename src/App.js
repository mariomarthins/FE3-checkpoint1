import './App.css';
import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';
import Ferramentas from './components/Ferramentas';
import Contato from './components/Contato';
// import Home from './components/Home';

function App() {
  return (
    <div className="App">

      <Header />
      {/* <Home /> */}
      <About />
      <Projects />
      <Ferramentas />
      <Contato />
      
    </div>
  );
}

export default App;
