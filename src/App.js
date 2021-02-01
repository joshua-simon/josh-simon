import React from 'react';
import './styles.css'
import Main from './components/Main'
import Thesis from './components/Thesis'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div>
      <Switch>
      <Route path ='/' exact component = {Main}/>
      <Route path ='/thesis'  component = {Thesis}/>
      </Switch>
    </div>
    </Router>
  )
}

export default App;
