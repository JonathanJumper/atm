import React, { Component } from 'react';
import './app.css';

export default class App extends Component {


  componentDidMount() {
    fetch('/api/info')
      .then(res => console.debug(res));
  }

  render() {
    return (
      <div className="App">
        <h1>
          ATM
        </h1>
        <div className="Menu">

          <div className="button">
            Retiro
          </div>

          <div className="button">
            Consulta
          </div>

          <div className="button">
            Transacciones
          </div>

        </div>
      </div>
    );
  }
}
