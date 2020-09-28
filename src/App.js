import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch'
import Comment from './Components/Comment/Comment';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/home">
            <Home />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/post/:id">
            <Comment />
          </Route>

          <Route path="*">
            <NoMatch />
          </Route>

        </Switch>
      </Router>
    </div>

  );
}

export default App;
