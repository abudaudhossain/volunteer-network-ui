import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Program from '../Program/Program'
const Programs = () => {
    return (
        <div>
            <h1 className="text-center">Our Volunteer Programs</h1>
            <Container className ='my-5'>
                <Row>
                    <Col lg={3} md={2}>
                        <Program name="Program Name"></Program>
                    </Col>
                    <Col>
                        <Program name="Program Name"></Program>
                    </Col>
                    <Col>
                        <Program name="Program Name"></Program>
                    </Col>
                    <Col>
                        <Program name="Program Name"></Program>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Programs;