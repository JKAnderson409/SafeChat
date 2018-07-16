import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'

export const Header = ()=>(
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Safe Chat</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1}>
        <Link to="/create">Create a chatroom</Link>
      </NavItem>
      <NavItem eventKey={2}>
        <Link to="/join">Join a chatroom</Link>
      </NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1}>
        <Link to="/login">Login</Link>
      </NavItem>
      <NavItem eventKey={2}>
        <Link to="/signUp">Create an account</Link>
      </NavItem>
    </Nav>
  </Navbar>
)