import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <>
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="">React</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
          <Nav className='ms-auto'>
          <NavLink className={'nav-link'} to={"/"}>Home</NavLink>
            <NavLink className={'nav-link'} to={"sass"}>Sass</NavLink>
            <NavLink className={'nav-link'} to={"sass2"}>Sass2</NavLink>
            <NavLink className={'nav-link'} to={"form"}>Form</NavLink>
            <NavLink className={'nav-link'} to={"formstepper"}>FormStepper</NavLink>
            <NavLink className={'nav-link'} to={"counter"}>Counter</NavLink>
            {/* <Nav.Link as={NavLink} to="/">
          Disabled
        </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  )
}

export default NavBar