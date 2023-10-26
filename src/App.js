// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [theme, setTheme] = useState('light')
  const toggle = ()=>{
    if (theme === 'light') {
      setTheme('dark')
      document.body.style.color = 'white'
      document.body.style.backgroundColor = '#04152f'
    }else{
      setTheme('light')
      document.body.style.color = 'black'
      document.body.style.backgroundColor = 'white'
    }
  }
  return (<>
  <Router>
  <Navbar title='TextUtils' theme={theme} toggle={toggle} />
    <Switch>
      <Route exact path="/">
        <TextForm heading='Enter the text to analyze' theme={theme} />
      </Route>
      <Route exact path="/about">
        <Alert />
      </Route>
    </Switch>
  </Router>
  </>);
}

export default App;
