import {Switch, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="app">
      <header><Nav /></header>
      <div className="container">
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
