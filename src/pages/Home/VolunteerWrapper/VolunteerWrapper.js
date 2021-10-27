import React from 'react';
import { Button } from 'react-bootstrap';
import './VWrapper.css';

const VolunteerWrapper = () => {
    return (
        <div className='wrapper d-flex align-items-center justify-content-center'>
            <div className="text-center text">
                <h1>Are you ready to volunteer?</h1>
                <p>start one of our program today and help people in need</p>
                <div className="d-flex justify-content-center">
                    <Button variant="outline-warning mx-3">BECAME A VOLUNTEER</Button>
                    <Button variant="outline-danger mx-3">MAKE A DONATION</Button>
                </div>

            </div>
        </div>
    );
};

export default VolunteerWrapper;