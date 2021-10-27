import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const TopHeader = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Nav >
                    <Nav.Link ><small>Call us +49 123 456 789</small></Nav.Link>
                    <Nav.Link><small>Send email support@email.de</small></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default TopHeader;