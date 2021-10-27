import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Volunteer from '../Volunteer/Volunteer';

const Volunteers = () => {
    return (
        <div className="my-5">
            <h1 className="text-center">Our group of volunteers</h1>
            <Container className ='my-5'>
                <Row>
                    <Col lg={3} md={2}>
                        <Volunteer></Volunteer>
                    </Col>
                    <Col lg={3} md={2}>
                        <Volunteer></Volunteer>
                    </Col>
                   
                    <Col lg={3} md={2}>
                        <Volunteer></Volunteer>
                    </Col>
                    <Col lg={3} md={2}>
                        <Volunteer></Volunteer>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Volunteers;