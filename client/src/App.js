import './App.css';

//Components
import Nav from './Nav/Nav.component';
import About from './About/About.component';
import Education from './Education/Education.component';

function App() {
  return (
    <div className="App">
      <Nav className="nav" />
      <About className="about" id="about" />
      <Education className="education" />
    </div>
  );
}

export default App;
