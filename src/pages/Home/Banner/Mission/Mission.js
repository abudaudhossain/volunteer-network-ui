import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './mission.css'

const Mission = () => {
    return (
        <Container className="py-5">
            <h1 className="text-center mb-5">Our Mission & Goals</h1>
            <Row className="d-flex align-items-center ">
                <Col lg={6}>
                    <img className="img-fluid" src="https://loveicon.smartdemowp.com/wp-content/uploads/2021/06/mission-goals.jpg" alt="" />
                </Col>
                <Col lg={6}>
                    <div className="p_left">
                    <h1>Small Donations Make Bigger Impact On Someone’s Life, Act Today!</h1>
                    <p className='py-3'>Our mission is to make the world a better place for everyone. Everyone has their rights equally and we want to make sure that people can get food, education, treatment and accommodation for everyone who is living in poverty.</p>
                    <Row>
                        <Col>
                            <div className="text-center">
                                <span><i class="fas fa-user-injured"></i></span>
                                <h4>Home Shelter</h4>
                            </div>
                        </Col>
                        <Col>
                            <span><i class="fas fa-hand-holding-water"></i></span>
                            <h4>Water And Food </h4>
                        </Col>
                        <Col>
                            <span><i class="far fa-heart"></i></span>
                            <h4>Love The World</h4>
                        </Col>
                    </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Mission;