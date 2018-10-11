import React, { Component } from 'react';
import './App.css';
// import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

// library.add(faStroopwafel)
class App extends Component {
  render() {
    return (
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="masthead mb-auto">
          <div className="inner">
            <h3 className="masthead-brand purple">Current Domain</h3>
            <nav className="nav nav-masthead justify-content-center">
              <p>
                <FontAwesomeIcon icon={faCoffee} />
                <i className="fab fa-twitter-square fa-2x green"></i>&nbsp;&nbsp;&nbsp;
                <i className="fab fa-facebook-square fa-2x green"></i>&nbsp;&nbsp;&nbsp;
                <i className="fab fa-instagram fa-2x green"></i>&nbsp;&nbsp;&nbsp;
              </p>
            </nav>
          </div>
        </header>
        <main role="main" className="inner cover">
          <h1 className="cover-heading green">Search for Domain</h1>
          <p className="lead green">Search through our listing of hundreds of Domain names to find the perfect one for you!</p>
          <p className="lead form-group">
            <input type="text" name="test" className="form-control inputTag" />
          </p>
          <div>
            <table className="table green">
              <caption className="purple">* footer note List of users</caption>
              <thead className="orange">
                <tr>
                  <th scope="col">Domain</th>
                  <th scope="col">Price</th>
                  <th scope="col">Hits</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Canna</td>
                  <td>Domains</td>
                  <td>.com</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>250</td>
                  <td>250</td>
                  <td>150</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>60% of Lorem Ispum Server Concat</td>
                  <td>70% of Lorem Ispum Server Concat</td>
                  <td>50%  of Lorem Ispum Server Concat</td> 
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
