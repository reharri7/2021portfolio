import './App.css';

//Components
import Nav from './Nav/Nav.component';
import About from './About/About.component';

function App() {
  return (
    <div className="App">
      <Nav className="nav" />
      <About className="about" id="about" />
    </div>
  );
}

export default App;
