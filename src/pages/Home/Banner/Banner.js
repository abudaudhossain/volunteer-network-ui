import React from 'react';
import Button from '../../../components/Button/Button'
import './Banner.css'


const Banner = () => {
    return (
        <div className='banner d-flex align-items-center justify-content-center'>
            <div className="text-center text">
                <h1>We try to help People with volunteering</h1>
                <p>try our programs and help people for Their needs</p>
                <div className="d-flex justify-content-center">
                    <Button>DONATE</Button>
                    <Button>CHECK OUR PROGRAM</Button>
                </div>

            </div>
        </div>
    );
};

export default Banner;

