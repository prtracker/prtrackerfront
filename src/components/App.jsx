import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import { Nav, NavItem } from 'react-bootstrap';

const App = () => {

  return (
    <div>
      <Nav className="site-navigation">
        <div className="site-navigation__logo">
          PR Trackify
        </div>
        <NavItem>
          <Link to="/view-pr">View PR List</Link>
        </NavItem>
        <NavItem>
          <Link to="/add-pr">Add New PR</Link>
        </NavItem>
      </Nav> 
    </div>
  );
};

export default App;
