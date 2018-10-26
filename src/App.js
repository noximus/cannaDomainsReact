import React, { Component } from 'react';
import Search from './com/Search';
import './App.css';

class App extends Component {
    render() {
    return (
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="masthead">
          <div className="inner">
            <h3 className="masthead-brand purple">Canna Domain</h3>
            <nav className="nav nav-masthead justify-content-center">
              <p>
                <a href="" target="_blank"><i className="fab fa-twitter-square fa-2x green"></i></a>&nbsp;&nbsp;&nbsp;
                <a href="" target="_blank"><i className="fab fa-facebook-square fa-2x green"></i></a>&nbsp;&nbsp;&nbsp;
                <a href="" target="_blank"><i className="fab fa-instagram fa-2x green"></i></a>&nbsp;&nbsp;&nbsp;
              </p>
            </nav>
          </div>
        </header>
        <div role="main" className="inner cover">
          <h1 className="cover-heading green">Search for Domain</h1>
          <p className="lead green">Search through our listing of hundreds of Domain names to find the perfect one for you!</p>
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
