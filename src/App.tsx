import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import Events from './Components/events/events';
import Fighters from './Components/fighters/fighters';
import Main from './Components/main/Main';
import Header from './Ui/header/Header';
import Menu from './Ui/menu/Menu';
import {CSSTransition, TransitionGroup } from 'react-transition-group';

const App: React.FC = () => {
  fetch('http://localhost:3000/events')
    .then( (data) => data.json())
    .then( res => console.log(res))
  return (
    <div className="App">
      <Router>
        <div>
          <Menu />
          <Route path="/" exact component={Main} />
          <Route path="/events/" component={Events} />
          <Route path="/fighters/" component={Fighters} />
        </div>
    </Router>
    </div>
  );
}

export default App;
