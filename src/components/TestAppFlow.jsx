import React, { Component } from 'react';
import { connect } from 'react-redux';
import { viewAction } from '../actions/viewAction';
import logo from '../logo.svg';
import '../App.css';

class Table extends Component {

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

export default connect(mapStateToProps, mapDispatchToProps)(Table);
