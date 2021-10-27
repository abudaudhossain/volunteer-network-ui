import React from 'react';
import Banner from '../Banner/Banner';
import Mission from '../Mission/Mission';
import Programs from '../Programs/Programs';
import Volunteers from '../Volunteers/Volunteers';
import VolunteerWrapper from '../VolunteerWrapper/VolunteerWrapper';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Mission></Mission>
            <Programs></Programs>
            <VolunteerWrapper></VolunteerWrapper>
            <Volunteers></Volunteers>

            <div style={{height:"100vh"}}></div>
        </div>
    );
};

export default Home;