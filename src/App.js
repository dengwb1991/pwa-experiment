import React, { Component } from 'react';
import { Switch, BrowserRouter, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const Page = ({ title }) => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{title}</h2>
      </div>
      <p className="App-intro">
        This is the {title} page.
      </p>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/about">About</Link>
      </p>
      <p>
        <Link to="/settings">Settings</Link>
      </p>
    </div>
)};

const Home = (props) => (
  <Page title="Home"/>
);

const About = (props) => (
  <>
    <Page title="About"/>
  </>
);

const Settings = (props) => (
  <Page title="Settings"/>
);

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/pwa">
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/settings" component={Settings}/>
          <Route path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;