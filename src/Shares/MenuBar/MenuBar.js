import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../logo.png";

const MenuBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
            <Navbar.Brand as={Link} to="/home">
                <img
                    src={logo}
                    width="200"
                    height="50"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/donation">Donation</Nav.Link>
                    <Nav.Link as={Link} to="/events">Events</Nav.Link>
                    <Nav.Link as={Link} to="/Blog">Blog</Nav.Link>
                    <Link to='/register'>
                        <Button className="mx-3" variant="primary">Register</Button>
                    </Link>
                    <Link to='/admin'>
                        <Button variant="secondary">Admin</Button>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default MenuBar;