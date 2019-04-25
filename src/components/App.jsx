import React, { Component } from 'react';
import { connect } from 'react-redux';
import { viewAction } from '../actions/viewAction';
import logo from '../logo.svg';
import { Link } from "react-router-dom";
import '../App.css';
import { Button } from 'react-bootstrap';

class App extends Component {

  viewAction = (event) => {
    this.props.viewAction();
}

 render() {
  return (
   <div className="App">
    <header className="App-header">
     <img src={logo} className="App-logo" alt="logo" />
     <h1 className="App-title">Welcome to React</h1>
    </header>
    <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
    <p className="App-intro">
     To get started, edit <code>src/App.js</code> and save to reload
    </p>
    <ul>
      <li>
        <Link to="/">View PR List</Link>
      </li>
      <li>
        <Link to="/add-pr">Add New PR</Link>
      </li>
    </ul>
    <button onClick={this.viewAction}>Test redux action</button>
   </div>
  );
 }
}

const mapStateToProps = state => ({
    ...state
   })

const mapDispatchToProps = dispatch => ({
    viewAction: () => dispatch(viewAction())
   })

export default connect(mapStateToProps, mapDispatchToProps)(App);
