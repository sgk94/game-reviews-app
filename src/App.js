import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import AddGame from './components/AddGame';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBars, faThumbsUp, faThumbsDown, faPlus } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GameCardDetails from './components/GameCardDetails';

library.add(faBars, faThumbsUp, faThumbsDown, faPlus)
console.log(process.env.REACT_APP_STEAM_API_KEY)
function App() {
 
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/addgame">
              <AddGame/>
            </Route>
            <Route exact path="/games/:id">
              <GameCardDetails/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
