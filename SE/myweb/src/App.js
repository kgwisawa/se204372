import React from 'react'
import {Navbar , Container ,Nav}from 'react-bootstrap'
import Home from './view/home';
import './style/Navbar.css';
function App() {

  return (
    <Navbar className='bar'>
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#Home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  );
}

export default App;
