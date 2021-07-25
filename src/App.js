import {Switch, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Contact from './pages/Contact';
import './styles/index.css';

function App() {
  return (
    <div className="App">
      <Nav />
        <Switch>
          <Route exact path="/" component = {() => (
            <Home />
          )}
            />
          <Route exact path="/drop-me-a-line" component = {() => (
            <Contact />
          )}
            />  
        </Switch>
    </div>
  );
}

export default App;
