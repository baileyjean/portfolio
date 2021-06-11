import {Switch, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './index.css';

function App() {
  return (
    <div className="app">
      <header><Nav /></header>
      <div>
        <Switch>
          <Route exact path="/" component = {(props) => (
            <Home />
          )}
            />
          <Route exact path="/what-you-came-here-for" component = {(props) => (
            <Projects />
          )}
            />
          <Route exact path="/obligatory-about-page" component = {(props) => (
            <About />
          )}
            />
          <Route exact path="/drop-me-a-line" component = {(props) => (
            <Contact />
          )}
            />  
        </Switch>
      </div>
    </div>
  );
}

export default App;
