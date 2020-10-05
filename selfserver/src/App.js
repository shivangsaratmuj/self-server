import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor {
    super();
    this.state={
      ip: ""
    }
  }
  componentWillMount(){
    axios.get("http://localhost:3000/ip").then(result => {
			return result.data;
		}).then(data => {
			console.log("Local ip as ",data);
      if (this.state.ip = '' || this.state.ip !== data) {
        this.setState({ip: data});
      }
		}).catch(err => {
			console.log(err);
		});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
        {
          this.state.ip
        }
        </p>
      </div>
    );
  }
}

export default App;
