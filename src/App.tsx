import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.scss';
import Events from './Components/events/events';
import Fighters from './Components/fighters/fighters';
import Main from './Components/main/Main';
import Menu from './Ui/menu/Menu';
import SingleEvent from './Components/event/single-event';

const App: React.FC = (props: any) => {

  return (
    <div className="App">
      <Router>
        <div>
          <Menu />
          <Route path="/" exact component={Main} />
          <Route path="/events/" component={Events} />
          <Route path="/event/:id" component={SingleEvent} />
          <Route path="/fighters/" component={Fighters} />
        </div>
    </Router>
    </div>
  );
}

export default App;
