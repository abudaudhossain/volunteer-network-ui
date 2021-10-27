import React from 'react';
import { Card } from 'react-bootstrap';

const Program = ({name}) => {
    return (
        <Card>
            <Card.Img variant="top" src="https://i.ibb.co/qBcbsYG/good-Education.png" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
            </Card.Body>
        </Card>
    );
};

export default Program;