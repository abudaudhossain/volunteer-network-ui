import React from 'react';
import { Card } from 'react-bootstrap';

const Volunteer = () => {
    return (
        <Card>
            <Card.Img className="img-fluid " variant="top" src="http://wp1.themexlab.com/wp/volunteer/wp-content/uploads/2015/10/team1-450x400.jpg" />
            <Card.Body>
                <Card.Title>Name: </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Email: </Card.Subtitle>
            </Card.Body>
        </Card>
    );
};

export default Volunteer;